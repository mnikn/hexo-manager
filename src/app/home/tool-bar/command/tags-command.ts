import { Command } from '../../../core/component/button/command';
export class TagsCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    console.log('tags');
  }
}
