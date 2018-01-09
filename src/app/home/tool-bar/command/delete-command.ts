import { Command } from '../../../core/component/button/command';
export class DeleteCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    this.user.dataService
      .removeSelected()
      .subscribe(() => {
        this.user.refresh();
      });
  }
}
