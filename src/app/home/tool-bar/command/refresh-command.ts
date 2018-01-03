import { Command } from '../../../core/component/button/command';
export class RefreshCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    this.user.dataService.refresh().subscribe(list => {
      this.user.articles = list;
    });
  }
}
