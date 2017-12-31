import { Command } from '../../../core/component/button/command';
export class BackWardCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    this.user.router.navigate(['/home']);
  }
}
