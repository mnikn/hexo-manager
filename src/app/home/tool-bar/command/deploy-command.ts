import { Command } from '../../../core/component/button/command';
export class DeployCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log('deploy');
  }
}
