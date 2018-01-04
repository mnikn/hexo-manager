import { Command } from '../../../core/component/button/command';
import { SelectionMode } from '../../../core/service/article-data.service';
export class DeleteCommand extends Command {

  constructor(user?: any) {
    super(user);
  }

  execute(): any {
    switch (this.user.dataService.getSelectionMode()) {
      case SelectionMode.single:
        this.user.dataService
          .removeItem(this.user.dataService.getSelectedItem().id)
          .subscribe(list => {
            this.user.articles = list;
            this.user.previewArticle = null;
          });
        break;
      case SelectionMode.multi:
        this.user.dataService
          .removeList(this.user.dataService.getSelectedList().map(e => e.id))
          .subscribe(list => {
            this.user.articles = list;
            this.user.previewArticle = null;
          });
        break;
    }
  }
}
