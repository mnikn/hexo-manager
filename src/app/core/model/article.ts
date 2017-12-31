import { ArticleFile } from './article-file';
import { ArticleContent } from './content';

export enum ArticleStatus {
  post,
  draft
}

export class Article {
  private _id: number;
  private _title: string;
  private _status: ArticleStatus;
  private _file: ArticleFile;
  private _content: ArticleContent;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get status(): ArticleStatus {
    return this._status;
  }

  set status(value: ArticleStatus) {
    this._status = value;
  }


  get file(): ArticleFile {
    return this._file;
  }

  set file(value: ArticleFile) {
    this._file = value;
  }

  get content(): ArticleContent {
    return this._content;
  }

  set content(value: ArticleContent) {
    this._content = value;
  }
}
