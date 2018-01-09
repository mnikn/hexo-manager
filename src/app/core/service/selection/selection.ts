import { Observable } from 'rxjs/Observable';
import { Article } from '../../model/article';

export enum SelectionMode {
  single = 0,
  multi
}

export interface Selection {
  getSelectionMode(): SelectionMode;
  getSelected(): any;
  setSelected(item: any): void;
  diselect(id?: any): void;
  removeSelected(list: Article[]): Article[];
  hasSelected(): boolean;
  isSelected(id: number): boolean;
  registerOnSelectChange(callback: (item) => void);
  fireOnSelectChange(): void;
}
