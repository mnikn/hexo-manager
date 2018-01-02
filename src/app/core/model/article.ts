export enum ArticleStatus {
  post,
  draft
}

export class Article {
  private _id: number;
  private _title: string;
  private _status: ArticleStatus;
  private _file: string;
  private _createDate: Date;
  private _content: string;
  private _tags: string[];


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

  get createDate(): Date {
    return this._createDate;
  }

  set createDate(value: Date) {
    this._createDate = value;
  }

  get file(): string {
    return this._file;
  }

  set file(value: string) {
    this._file = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(value: string[]) {
    this._tags = value;
  }
}
