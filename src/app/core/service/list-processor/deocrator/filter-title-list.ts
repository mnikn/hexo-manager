import { ListDecorator } from './list-decorator';
import { ListProcessor } from '../list-processor';
import { Article } from '../../../model/article';

export class FilterTitleList extends ListDecorator {

  constructor(processor: ListProcessor) {
    super(processor);
  }

  public getList(): Article[] {
    return this.processor.getInfo().searchTitle ?
      this.processor.getList().filter(e => e.title.includes(this.processor.getInfo().searchTitle)) :
      this.processor.getList();
  }
}
