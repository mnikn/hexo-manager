import { Selection, SelectionMode } from './selection';
import { Article } from '../../model/article';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class SingleSelection implements Selection {
  private _selectedItem: Article;
  private _selectChangeCallback: (item: Article) => void;

  constructor() {
  }

  getSelectionMode(): SelectionMode {
    return SelectionMode.single;
  }

  getSelected() {
    return this._selectedItem;
  }

  setSelected(item): void {
    this._selectedItem = item;
    this.fireOnSelectChange();
  }

  diselect(): void {
    this._selectedItem = null;
    this.fireOnSelectChange();
  }

  hasSelected(): boolean {
    return this._selectedItem != null;
  }

  isSelected(id: number): boolean {
    return this._selectedItem && this._selectedItem.id === id;
  }

  removeSelected(list: Article[]): Observable<Article[]> {
    let self = this;
    return Observable.create(function (observer) {
      let index = list.findIndex(e => e.id === self._selectedItem.id);
      list.splice(index, 1);
      observer.next(list);
    });
  }

  registerOnSelectChange(callback: (item: Article) => void) {
    this._selectChangeCallback = callback;
  }

  fireOnSelectChange(): void {
    if (this._selectChangeCallback) {
      this._selectChangeCallback(this._selectedItem);
    }
  }

}
