import { Article, ArticleStatus } from '../../model/article';
import * as _ from 'lodash';

export interface ListProcessor {
  getList(): Article[];
  getInfo(): ArticleListInfo;
}

export enum SortMethod {
  date,
  name
}

export class ArticleListInfo {
  public sortMethod: SortMethod;
  public filterStatus: ArticleStatus;
  public filterTags: string[];
  public searchTitle: string;
}

export class ListProcessorBase implements ListProcessor {
  private _list: Article[];
  private _info: ArticleListInfo;

  constructor(list: Article[], info: ArticleListInfo) {
    this._list = list;
    this._info = info ? info : new ArticleListInfo();

    if (_.isUndefined(this._info.sortMethod)) {
      this._info.sortMethod = SortMethod.date;
    }
  }

  public getList(): Article[] {
    return this._list;
  }

  public getInfo(): ArticleListInfo {
    return this._info;
  }
}
