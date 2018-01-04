import
{
  Component, Input, OnInit
} from '@angular/core';
import { Article } from '../../../core/model/article';
import { ArticleDataService, SelectionMode } from '../../../core/service/article-data.service';

@Component({
  selector: 'app-home-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() public article: Article;

  public startTime: number;
  public endTime: number;
  public time;

  public isSelected: boolean;

  constructor(public dataService: ArticleDataService) {
  }

  ngOnInit() {
    this.isSelected = this.dataService.isItemSelected(this.article.id);
  }

  public onTagClick(tag: string): void {
    let event = window.event;
    event.stopPropagation();

    console.log(tag);
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
