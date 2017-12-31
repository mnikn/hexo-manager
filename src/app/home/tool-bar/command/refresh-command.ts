import { Command } from '../../../core/component/button/command';
export class RefreshCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log('refresh');
  }
}
