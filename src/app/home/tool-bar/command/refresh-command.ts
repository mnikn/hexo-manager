import { Command } from '../../../core/component/button/command';
export class RefreshCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    let self = this;
    this.user.previewArticle = null;
    this.user.dataService.refresh().subscribe(() => {
      self.user.dataService.getList(self.user.listInfo).subscribe(list => {
        self.user.articles = list;
      });
    });
  }
}
