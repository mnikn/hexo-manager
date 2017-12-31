export class ArticleContent {
  private _mdContent: string;
  private _htmlContent: string;


  get mdContent(): string {
    return this._mdContent;
  }

  set mdContent(value: string) {
    this._mdContent = value;
  }

  get htmlContent(): string {
    return this._htmlContent;
  }

  set htmlContent(value: string) {
    this._htmlContent = value;
  }
}
