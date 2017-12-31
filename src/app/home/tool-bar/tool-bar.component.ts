import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../../core/component/button/button';
import { ArticleListComponent } from '../article-list/article-list.component';
import { articleStatus } from '../../core/model/article-status';
import { RefreshCommand } from './command/refresh-command';
import { TagsCommand } from './command/tags-command';
import { AddCommand } from './command/add-command';
import { DeleteCommand } from './command/delete-command';
import { DeployCommand } from './command/deploy-command';
import { MoveToDraftCommand } from './command/move-to-draft';
import { MoveToPostCommand } from './command/move-to-post';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  public currentButtons: Button[];
  private summaryButtons: Button[] = [];
  private postButtons: Button[] = [];
  private draftButtons: Button[] = [];


  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  @Input()
  set user(user: any) {
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
  }

  private changeCurrentButtons(user: any): void {
    if (user instanceof ArticleListComponent) {
      if (user.currentArticleStatus === articleStatus.post) {
        this.currentButtons = this.postButtons;
      } else {
        this.currentButtons = this.draftButtons;
      }
    } else {
      this.currentButtons = this.summaryButtons;
    }
    this.currentButtons.forEach(e => e.command.user = this.user);
  }

  private initButtons(tool_bar: any): void {
    const size = 'large';
    const shape = 'circle';

    let refreshButton = new Button(tool_bar.refresh, shape, new RefreshCommand(), size, 'anticon anticon-reload');
    let tagsButton = new Button(tool_bar.tags, shape, new TagsCommand(), size, 'anticon anticon-tags');
    let addButton = new Button(tool_bar.add, shape, new AddCommand(), size, 'anticon anticon-plus');
    let deleteButton = new Button(tool_bar.delete, shape, new DeleteCommand(), size, 'anticon anticon-minus');
    let deployButton = new Button(tool_bar.deploy, shape, new DeployCommand(), size, 'anticon anticon-upload');
    let moveToPostButton = new Button(tool_bar.move_to_post, shape, new MoveToPostCommand(), size, 'anticon anticon-swap');
    let moveToDraftButton = new Button(tool_bar.move_to_draft, shape, new MoveToDraftCommand(), size, 'anticon anticon-swap');

    this.summaryButtons = [
      refreshButton,
      tagsButton,
      deployButton
    ];
    this.postButtons = [
      refreshButton,
      tagsButton,
      addButton,
      deleteButton,
      deployButton,
      moveToDraftButton
    ];
    this.draftButtons = [
      refreshButton,
      tagsButton,
      addButton,
      deleteButton,
      deployButton,
      moveToPostButton
    ];
  }

}
