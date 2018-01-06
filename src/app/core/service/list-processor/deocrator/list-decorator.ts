import { ArticleListInfo, ListProcessor } from '../list-processor';
import { Article } from '../../../model/article';

export class ListDecorator implements ListProcessor {
  protected processor: ListProcessor;

  constructor(processor: ListProcessor) {
    this.processor = processor;
  }

  getList(): Article[] {
    return this.processor.getList();
  }

  getInfo(): ArticleListInfo {
    return this.processor.getInfo();
  }
}
