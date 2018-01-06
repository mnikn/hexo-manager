import { ListDecorator } from './list-decorator';
import { Article, ArticleStatus } from '../../../model/article';
import { ListProcessor } from '../list-processor';
export class DraftList extends ListDecorator {

  constructor(processor: ListProcessor) {
    super(processor);
  }

  public getList(): Article[] {
    return this.processor.getInfo().filterStatus === ArticleStatus.draft ?
      this.processor.getList().filter(e => e.status === ArticleStatus.draft) :
      this.processor.getList();
  }

}
