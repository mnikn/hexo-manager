import { ListDecorator } from './list-decorator';
import { ListProcessor } from '../list-processor';
import { Article } from '../../../model/article';
import * as _ from 'lodash';

export class FilterTagList extends ListDecorator {

  constructor(processor: ListProcessor) {
    super(processor);
  }

  public getList(): Article[] {
    return this.processor.getInfo().filterTags ?
      this.processor.getList().filter(e => {
        let intersection = _.intersection(e.tags, this.processor.getInfo().filterTags);
        return intersection.length >= this.processor.getInfo().filterTags.length;
      }) :
      this.processor.getList();
  }
}
