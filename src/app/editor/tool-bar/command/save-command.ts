import { Command } from '../../../core/component/button/command';
export class SaveCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log(this.user.article);
    this.user.dataService.updateItem(this.user.outputArticle).subscribe(item => {
      this.user.outputArticle = item;
    });
  }
}
