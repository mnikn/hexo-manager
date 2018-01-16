import { Command } from '../../../core/component/button/command';
import { Observable } from 'rxjs/Observable';
declare let electron: any;

export class DeployCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    let self = this;
    let dir = this.user.global.hexoDir.rootDir.replace(' ', '\\ ');
    let command = 'cd ' + dir + ' && ' + this.user.global.command.deploy;

    self.user.dataService.setIsLoading(true);
    let childProcess = electron.remote.require('child_process')
      .exec(command, (error, stdout, stderr) => {
        self.user.dataService.setIsLoading(false);
        electron.remote.getCurrentWindow().focus();
      });
  }
}
