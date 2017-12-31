export class ArticleFile {
  private _name: string;
  private _createDate: Date;


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get createDate(): Date {
    return this._createDate;
  }

  set createDate(value: Date) {
    this._createDate = value;
  }
}
