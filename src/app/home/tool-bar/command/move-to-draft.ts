import { Command } from '../../../core/component/button/command';
import { ArticleStatus } from '../../../core/model/article';
import * as _ from 'lodash';

export class MoveToDraftCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    let selected = this.user.dataService.getSelected();
    if (_.isArray(selected)) {
      selected.forEach(e => e.status = ArticleStatus.draft);
    } else {
      selected.status = ArticleStatus.draft;
    }
    this.user.refresh();
  }
}
