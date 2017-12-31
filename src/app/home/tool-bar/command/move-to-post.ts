import { Command } from '../../../core/component/button/command';
export class MoveToPostCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log('move to post');
  }
}
