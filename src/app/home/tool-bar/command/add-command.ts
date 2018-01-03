import { Command } from '../../../core/component/button/command';
export class AddCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    this.user.dataService.createItem().subscribe(list => {
      this.user.articles = list;
    });
  }
}
