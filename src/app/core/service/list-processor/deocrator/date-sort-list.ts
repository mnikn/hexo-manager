import { ListDecorator } from './list-decorator';
import { Article } from '../../../model/article';
import { ListProcessor, SortMethod } from '../list-processor';
export class DateSortList extends ListDecorator {

  constructor(processor: ListProcessor) {
    super(processor);
  }

  public getList(): Article[] {
    return this.processor.getInfo().sortMethod === SortMethod.date ?
      this.processor.getList().sort((a, b) => b.createDate.getTime() - a.createDate.getTime()) :
      this.processor.getList();
  }

}
