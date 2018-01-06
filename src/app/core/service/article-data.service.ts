import { Inject, Injectable } from '@angular/core';
import { Article, ArticleStatus } from '../model/article';
import { Observable } from 'rxjs/Observable';
import { SingleSelection } from './selection/single-selection';
import { Selection, SelectionMode } from './selection/selection';
import { MultiSelection } from './selection/multi-selection';
import * as _ from 'lodash';
import { FileReader } from './file-reader/file-reader';
import { MarkdownFileReader } from './file-reader/markdown-file-reader';
import { Global } from '../../global';
import { MarkdownParser } from './file-reader/parser/markdown-parser';

@Injectable()
export class ArticleDataService {

  private _list: Article[];
  private _selection: Selection;
  private _onSelectChange: (item) => void;
  private _fileReader: FileReader<Article>;
  private _hasLoadFile: boolean;
  private _previewCache: Map<number, string>;
  private _parser: MarkdownParser;

  constructor(private global: Global) {
    this._list = [];
    this._selection = new SingleSelection();
    this._fileReader = new MarkdownFileReader();
    this._hasLoadFile = false;
    this._previewCache = new Map();
    this._parser = new MarkdownParser();
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

  public getList(): Article[] {
    return this._list;
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
      observer.next(self._list);
    });
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

  private createFakeData(): Article[] {
    let articles = [new Article(), new Article(), new Article()];

    let i = 0;
    articles.forEach(e => e.id = i++);
    i = 1;
    articles.forEach(e => e.content = 'Content' + i++);
    i = 1;
    articles.forEach(e => e.title = '设计模式之禅' + i++);
    articles.forEach(e => e.createDate = new Date());
    articles.forEach(e => e.tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']);
    return articles;
  }

  public fireOnSelectChange(): void {
    this._selection.fireOnSelectChange();
  }


}
