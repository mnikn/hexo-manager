import { Command } from '../../../core/component/button/command';
export class SaveCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    let path = this.user.outputArticle.path.split('/');
    path[path.length - 1] = this.user.outputArticle.title + '.md';
    path = path.join('/');
    this.user.dataService.updateItem(this.user.outputArticle, path).subscribe(item => {
      this.user.outputArticle = item;
    });
  }
}
