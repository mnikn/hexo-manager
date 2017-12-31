import { Command } from '../../../core/component/button/command';
export class AddCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log('add');
  }
}
