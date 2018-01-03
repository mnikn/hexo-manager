import { Command } from '../../../core/component/button/command';
import { ArticleStatus } from '../../../core/model/article';
export class BackWardCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    let status = this.user.article.status === ArticleStatus.post ? 'post' : 'draft';
    this.user.router.navigate(['/home/article-list/' + status]);
  }
}
