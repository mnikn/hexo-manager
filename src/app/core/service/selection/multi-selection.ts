import { Selection, SelectionMode } from './selection';
import { Article } from '../../model/article';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import { Injectable } from '@angular/core';

@Injectable()
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
    if (!_.isUndefined(id)) {
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

  removeSelected(list: Article[]): Article[] {
    let ids = this._selectedList.map(e => e.id);
    _.remove(list, e => ids.includes(e.id));
    return list;
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
