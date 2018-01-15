import { Command } from '../../../core/component/button/command';
export class ArticleInfoCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    this.user.showInfoModal();
  }
}
