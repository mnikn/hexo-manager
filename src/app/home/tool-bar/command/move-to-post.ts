import { Command } from '../../../core/component/button/command';
import { ArticleStatus } from '../../../core/model/article';
import * as _ from 'lodash';

export class MoveToPostCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    let selected = this.user.dataService.getSelected();
    if (_.isArray(selected)) {
      selected.forEach(e => e.status = ArticleStatus.post);
    } else {
      selected.status = ArticleStatus.post;
    }
    let path = selected.path.split('/');
    path[path.length - 2] = '_posts';
    path[path.length - 1] = selected.title + '.md';
    path = path.join('/');
    this.user.dataService.updateItem(selected, path).subscribe(() => {
      this.user.refresh();
    });
  }
}
