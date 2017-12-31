import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-home-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  private user: any;
  public currentButtons: Button[];
  private summaryButtons: Button[];
  private postButtons: Button[];
  private draftButtons: Button[];

  constructor() {
    const size = 'large';
    const shape = 'circle';

    let refreshButton = new Button('reload all articles', shape, new RefreshCommand(), size, 'anticon anticon-reload');
    let tagsButton = new Button('show all article tags', shape, new TagsCommand(), size, 'anticon anticon-tags');
    let addButton = new Button('add new article', shape, new AddCommand(), size, 'anticon anticon-plus');
    let deleteButton = new Button('delete selected article', shape, new DeleteCommand(), size, 'anticon anticon-minus');
    let deployButton = new Button('deploy to github', shape, new DeployCommand(), size, 'anticon anticon-upload');
    let moveToPostButton = new Button('move to post box', shape, new MoveToPostCommand(), size, 'anticon anticon-swap');
    let moveToDraftButton = new Button('move to draft box', shape, new MoveToDraftCommand(), size, 'anticon anticon-swap');

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

  ngOnInit() {
  }

  public setUser(user: any) {
    this.user = user;
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

}
