import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../../core/component/button/button';
import { ArticleListComponent } from '../article-list/article-list.component';
import { RefreshCommand } from './command/refresh-command';
import { AddCommand } from './command/add-command';
import { DeleteCommand } from './command/delete-command';
import { DeployCommand } from './command/deploy-command';
import { MoveToDraftCommand } from './command/move-to-draft';
import { MoveToPostCommand } from './command/move-to-post';
import { TranslateService } from '@ngx-translate/core';
import { EditCommand } from './command/edit-command';
import { ArticleStatus } from '../../core/model/article';
import { ArticleDataService } from '../../core/service/article-data.service';
import * as _ from 'lodash';
import { NoDataComponent } from '../no-data/no-data.component';
import { SortMethod } from '../../core/service/list-processor/list-processor';

@Component({
  selector: 'app-home-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  public currentButtons: Button[];
  public searchText: string;
  public filterOptions;

  private _user: ArticleListComponent;


  private defaultButtons: Button[] = [];
  private postButtons: Button[] = [];
  private draftButtons: Button[] = [];

  private refreshButton: Button;
  private addButton: Button;
  private deleteButton: Button;
  private deployButton: Button;
  private moveToPostButton: Button;
  private moveToDraftButton: Button;
  private editButton: Button;


  constructor(private dataService: ArticleDataService,
              private translateService: TranslateService) {
  }

  ngOnInit() {
    let self = this;
    this.dataService.registerOnSelectChange(() => {
      let hasSelectMulti = _.isArray(self.dataService.getSelected()) && self.dataService.getSelected().length > 1;
      self.addButton.disabled = hasSelectMulti;
      self.deployButton.disabled = hasSelectMulti;
      self.deleteButton.disabled = !self.dataService.hasSelected();
      self.moveToDraftButton.disabled = !self.dataService.hasSelected();
      self.moveToPostButton.disabled = !self.dataService.hasSelected();
      self.editButton.disabled = !self.dataService.hasSelected() || hasSelectMulti;
    });
    this.filterOptions = [
      {value: SortMethod.date, label: 'home.tool_bar.sort.date'},
      {value: SortMethod.name, label: 'home.tool_bar.sort.name'}
    ];
  }

  get user(): ArticleListComponent {
    return this._user;
  }

  @Input()
  set user(user: ArticleListComponent) {
    if (!this.currentButtons) {
      this.translateService
        .get('home.tool_bar')
        .subscribe(tool_bar => {
          this.initButtons(tool_bar);
          this.changeCurrentButtons(user);
        });
    } else {
      this.changeCurrentButtons(user);
    }
    this._user = user;
  }

  public onSearch(searchText: string): void {
    this.user.listInfo.searchTitle = searchText;
    this.user.refresh();
  }

  public onSortMethodChange(sortMethod: SortMethod): void {
    this.user.listInfo.sortMethod = sortMethod;
    this.user.refresh();
  }

  private changeCurrentButtons(user: any): void {
    this.currentButtons = [];
    if (user instanceof ArticleListComponent) {
      if (user.listInfo.filterStatus === ArticleStatus.post) {
        this.currentButtons = this.postButtons;
      } else {
        this.currentButtons = this.draftButtons;
      }
    } else if (!(user instanceof NoDataComponent)) {
      this.currentButtons = this.defaultButtons;
    }
    this.currentButtons.forEach(e => e.command.user = user);
  }

  private initButtons(tool_bar: any): void {
    const size = 'large';
    const shape = 'circle';

    this.refreshButton = new Button(tool_bar.refresh, shape, new RefreshCommand(), size, 'anticon anticon-reload');
    this.addButton = new Button(tool_bar.add, shape, new AddCommand(), size, 'anticon anticon-plus');
    this.deleteButton = new Button(tool_bar.delete, shape, new DeleteCommand(), size, 'anticon anticon-minus');
    this.deployButton = new Button(tool_bar.deploy, shape, new DeployCommand(), size, 'anticon anticon-upload');
    this.moveToPostButton = new Button(tool_bar.move_to_post, shape, new MoveToPostCommand(), size, 'anticon anticon-swap');
    this.moveToDraftButton = new Button(tool_bar.move_to_draft, shape, new MoveToDraftCommand(), size, 'anticon anticon-swap');
    this.editButton = new Button(tool_bar.edit, shape, new EditCommand(), size, 'anticon anticon-edit');

    this.defaultButtons = [
      this.refreshButton,
      this.deployButton
    ];
    this.defaultButtons.forEach(e => e.command.container = e);
    this.postButtons = [
      this.refreshButton,
      this.addButton,
      this.deleteButton,
      this.deployButton,
      this.moveToDraftButton,
      this.editButton
    ];
    this.postButtons.forEach(e => e.command.container = e);
    this.draftButtons = [
      this.refreshButton,
      this.addButton,
      this.deleteButton,
      this.deployButton,
      this.moveToPostButton,
      this.editButton
    ];
    this.draftButtons.forEach(e => e.command.container = e);
    this.dataService.fireOnSelectChange();
  }

}
