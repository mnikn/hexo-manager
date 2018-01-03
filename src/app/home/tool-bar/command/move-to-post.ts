import { Command } from '../../../core/component/button/command';
import { ArticleStatus } from '../../../core/model/article';
export class MoveToPostCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    this.user.dataService.getSelectedList().forEach(e => {
      e.status = ArticleStatus.post;
    });
  }
}
