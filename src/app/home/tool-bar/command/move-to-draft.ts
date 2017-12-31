import { Command } from '../../../core/component/button/command';
export class MoveToDraftCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log('move to draft');
  }
}
