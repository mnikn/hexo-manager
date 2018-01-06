import { ListDecorator } from './list-decorator';
import { Article } from '../../../model/article';
import { ListProcessor, SortMethod } from '../list-processor';
export class NameSortList extends ListDecorator {

  constructor(processor: ListProcessor) {
    super(processor);
  }

  public getList(): Article[] {
    return this.processor.getInfo().sortMethod === SortMethod.name ?
      this.processor.getList().sort((a, b) => a.title.length - b.title.length) :
      this.processor.getList();
  }
}
