import { ListDecorator } from './list-decorator';
import { Article } from '../../../model/article';
import { ListProcessor, SortMethod } from '../list-processor';
export class DateSortList extends ListDecorator {

  constructor(processor: ListProcessor) {
    super(processor);
  }

  public getList(): Article[] {
    console.log('date');
    return this.processor.getInfo().sortMethod === SortMethod.date ?
      this.processor.getList().sort(e => e.createDate.getTime()) :
      this.processor.getList();
  }

}
