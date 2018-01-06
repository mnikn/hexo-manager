import { Injectable } from '@angular/core';
import { Article, ArticleStatus } from '../model/article';
import { Observable } from 'rxjs/Observable';
import { SingleSelection } from './selection/single-selection';
import { Selection, SelectionMode } from './selection/selection';
import { MultiSelection } from './selection/multi-selection';
import * as _ from 'lodash';
import { FileReader } from './file-reader/file-reader';
import { MarkdownFileReader } from './file-reader/markdown-file-reader';
import { Global } from '../../global';
import { MarkdownParser } from './parser/markdown-parser';
import { ArticleListInfo, ListProcessor, ListProcessorBase } from './list-processor/list-processor';
import { PostList } from './list-processor/deocrator/post-list';
import { NameSortList } from './list-processor/deocrator/name-sort-list';
import { DraftList } from './list-processor/deocrator/draft-list';
import { FilterTagList } from './list-processor/deocrator/filter-tag-list';
import { DateSortList } from './list-processor/deocrator/date-sort-list';
import { FilterTitleList } from './list-processor/deocrator/filter-title-list';

@Injectable()
export class ArticleDataService {

  private _list: Article[];
  private _selection: Selection;
  private _onSelectChange: (item) => void;
  private _fileReader: FileReader<Article>;
  private _hasLoadFile: boolean;
  private _previewCache: Map<number, string>;
  private _parser: MarkdownParser;
  private _isRefreshing: boolean;

  constructor(private global: Global) {
    this._list = [];
    this._selection = new SingleSelection();
    this._fileReader = new MarkdownFileReader();
    this._hasLoadFile = false;
    this._previewCache = new Map();
    this._parser = new MarkdownParser();
    this._isRefreshing = false;
  }

  public getPreviewContent(id: number): string {
    if (this._previewCache.has(id)) {
      return this._previewCache.get(id);
    }

    this._previewCache[id] = this._parser.parse(this.getItem(id).content);
    return this._previewCache[id];
  }

  public getItem(id: number): Article {
    let index = this._list.findIndex(e => e.id === id);
    return this._list[index];
  }

  public getList(info?: ArticleListInfo): Observable<Article[]> {
    let self = this;
    return Observable.create(function (observer) {
      let processor: ListProcessor = new ListProcessorBase(self._list, info);
      processor = new PostList(processor);
      processor = new DraftList(processor);
      processor = new NameSortList(processor);
      processor = new DateSortList(processor);
      processor = new FilterTagList(processor);
      processor = new FilterTitleList(processor);
      observer.next(processor.getList());
    });
  }

  public createItem(): Observable<Article[]> {
    let self = this;
    return Observable.create(function (observer) {
      let newArticle = new Article();
      newArticle.id = self._list.length;
      newArticle.title = 'Article' + newArticle.id;
      newArticle.createDate = new Date();
      self._list.push(newArticle);
      observer.next(self._list);
    });
  }

  public removeSelected(): Observable<Article[]> {
    return this._selection.removeSelected(this._list);
  }

  public refresh(): Observable<Article[]> {
    let self = this;
    this._isRefreshing = true;
    return Observable.create(function (observer) {
      if (!self.global.hexoDir) {
        return;
      }

      let postList = self._fileReader.readDirectorySync(self.global.hexoDir.postDir);
      postList.forEach(e => e.status = ArticleStatus.post);
      let draftList = self._fileReader.readDirectorySync(self.global.hexoDir.draftDir);
      draftList.forEach(e => e.status = ArticleStatus.draft);
      self._list = postList.concat(draftList);
      self._hasLoadFile = true;
      setTimeout(() => {
        self._isRefreshing = false;
      }, 500);
      observer.next();
    });
  }

  public isRefreshing(): boolean {
    return this._isRefreshing;
  }

  public hasLoadFile(): boolean {
    return this._hasLoadFile;
  }

  public getSelectionMode(): SelectionMode {
    return this._selection.getSelectionMode();
  }

  public changeSelectionMode(): void {
    this._selection = this._selection instanceof SingleSelection ? new MultiSelection() : new SingleSelection();
    this._selection.registerOnSelectChange(this._onSelectChange);
    this._selection.fireOnSelectChange();
  }

  public setSelected(id: any): void {
    this._selection.setSelected(_.isArray(id) ? this._list.filter(e => id.includes(e.id)) : this.getItem(id));
  }

  public diselect(id?: any): void {
    this._selection.diselect(id);
  }

  public hasSelected(): boolean {
    return this._selection.hasSelected();
  }

  public getSelected(): any {
    return this._selection.getSelected();
  }

  public isSelected(id: number): boolean {
    return this._selection.isSelected(id);
  }

  public registerOnSelectChange(callback: (item) => void): void {
    this._onSelectChange = callback;
    this._selection.registerOnSelectChange(callback);
  }

  public fireOnSelectChange(): void {
    this._selection.fireOnSelectChange();
  }


}
