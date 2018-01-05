import { Selection, SelectionMode } from './selection';
import { Article } from '../../model/article';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';

export class MultiSelection implements Selection {
  private _selectedList: Article[];
  private _selectChangeCallback: (list: Article[]) => void;

  constructor() {
    this._selectedList = [];
  }

  getSelectionMode(): SelectionMode {
    return SelectionMode.multi;
  }

  getSelected(): any {
    return this._selectedList;
  }

  setSelected(item): void {
    let selectedIds = this._selectedList.map(e => e.id);
    if (_.isArray(item)) {
      this._selectedList = this._selectedList.concat(item.filter(e => !selectedIds.includes(e.id)));
    } else if (!selectedIds.includes(item.id)) {
      this._selectedList.push(item);
    }
    this.fireOnSelectChange();
  }

  diselect(id?: any): void {
    if (id) {
      if (_.isArray(id)) {
        let ids = id;
        _.remove(this._selectedList, e => ids.includes(e.id));
      } else {
        _.remove(this._selectedList, e => e.id === id);
      }
    } else {
      this._selectedList = [];
    }
    this.fireOnSelectChange();
  }

  removeSelected(list: Article[]): Observable<Article[]> {
    let self = this;
    return Observable.create(function (observer) {
      let ids = self._selectedList.map(e => e.id);
      _.remove(list, e => ids.includes(e.id));
      observer.next(list);
    });
  }

  hasSelected(): boolean {
    return !_.isEmpty(this._selectedList);
  }

  isSelected(id: number): boolean {
    return this._selectedList.map(e => e.id).includes(id);
  }

  registerOnSelectChange(callback: (list: Article[]) => void) {
    this._selectChangeCallback = callback;
  }

  fireOnSelectChange(): void {
    if (this._selectChangeCallback) {
      this._selectChangeCallback(this._selectedList);
    }
  }

}
