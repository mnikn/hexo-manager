import { Command } from '../../../core/component/button/command';
export class SaveCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log('save');
  }
}
