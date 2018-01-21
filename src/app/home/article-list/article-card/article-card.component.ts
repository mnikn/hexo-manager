import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild,
  ViewChildren
} from '@angular/core';
import { Article } from '../../../core/model/article';
import { ArticleDataService } from '../../../core/service/article-data.service';
import { SelectionMode } from '../../../core/service/selection/selection';
import { NzButtonComponent, NzToolTipComponent } from 'ng-zorro-antd';
import { Global } from '../../../global';

@Component({
  selector: 'app-home-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() public article: Article;
  @Output() tagClick: EventEmitter<string> = new EventEmitter();
  @ViewChild(NzToolTipComponent) tooltip;


  @ViewChildren(NzButtonComponent)
  buttons: QueryList<NzButtonComponent>;
  public startTime: number;
  public endTime: number;
  public time;

  public isSelected: boolean;

  constructor(public global: Global, public dataService: ArticleDataService) {
  }

  ngOnInit() {
    this.isSelected = this.dataService.isSelected(this.article.id);
  }

  public onTagClick(tag: string): void {
    let event = window.event;
    event.stopPropagation();

    this.tagClick.emit(tag);
  }

  private getTimeNow(): number {
    let now = new Date();
    return now.getTime();
  }

  public onMouseDown(): void {
    if (this.dataService.getSelectionMode() === SelectionMode.multi) {
      return;
    }

    this.startTime = this.getTimeNow();

    let self = this;
    this.time = setInterval(function () {
      self.endTime = self.getTimeNow();

      if (self.endTime - self.startTime >= 300) {
        clearInterval(self.time);
        self.dataService.changeSelectionMode();
      }
    }, 100);
  }

  public onMouseUp(): void {
    clearInterval(this.time);
  }

}
