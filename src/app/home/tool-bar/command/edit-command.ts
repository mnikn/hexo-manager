import { Command } from '../../../core/component/button/command';
export class EditCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    this.user.router.navigate(['/editor', this.user.dataService.getSelectedItem().id]);
  }
}
