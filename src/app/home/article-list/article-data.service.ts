import { Injectable } from '@angular/core';
import { Article } from '../../core/model/article';
import { Observable } from 'rxjs/Observable';

export enum SelectionMode {
  single, multi
}

@Injectable()
export class ArticleDataService {

  private _list: Article[];
  private _selectionMode: SelectionMode;
  private _selectedIds: Set<number>;

  constructor() {
    this._list = [];
    this._selectedIds = new Set();
    this._selectionMode = SelectionMode.single;
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

  public removeItem(id: number): Observable<Article[]> {
    let self = this;
    return Observable.create(function (observer) {
      let index = self._list.findIndex(e => e.id === id);
      self._list.splice(index, 1);
      observer.next(self._list);
    });
  }

  public refresh(): Observable<Article[]> {
    let self = this;
    return Observable.create(function (observer) {
      self._list = self.createFakeData();
      observer.next(self._list);
    });
  }

  public setSelectionMode(mode: SelectionMode): void {
    this._selectionMode = mode;
  }

  public selectItem(id: number): void {
    if (this.isItemSelected(id)) {
      return;
    }

    switch (this._selectionMode) {
      case SelectionMode.single:
        this._selectedIds.clear();
        break;
      case SelectionMode.multi:
        break;
    }
    this._selectedIds.add(id);
  }

  public diselectItem(id: number): void {
    this._selectedIds.delete(id);
  }

  public diselectItems(ids: number[]): void {
    ids.forEach(id => this.diselectItem(id));
  }

  public getSelectedItem(): Article {
    let id = this._selectedIds.values().next().value;
    return this.getItem(id);
  }

  public getSelectedList(): Article[] {
    return this._list.filter(e => this._selectedIds.has(e.id));
  }

  public isItemSelected(id: number): boolean {
    return this._selectedIds.has(id);
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


}
