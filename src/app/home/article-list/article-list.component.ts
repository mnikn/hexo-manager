import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleStatus } from '../../core/model/article';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDataService } from '../../core/service/article-data.service';
import { SelectionMode } from '../../core/service/selection/selection';
import { ArticleListInfo } from '../../core/service/list-processor/list-processor';
import * as _ from 'lodash';
import { Global } from '../../global';

@Component({
  selector: 'app-home-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, AfterViewInit {

  @ViewChildren(ArticleCardComponent)
  cards: QueryList<ArticleCardComponent>;
  public previewArticle: Article;
  public contentHeight: number = window.screen.height;
  public articles: Article[];
  public listInfo: ArticleListInfo;

  constructor(public router: Router,
              public global: Global,
              public dataService: ArticleDataService,
              private route: ActivatedRoute) {
    this.listInfo = new ArticleListInfo();
    this.route.url.subscribe(value => {
      switch (value[1].path) {
        case 'post':
          this.listInfo.filterStatus = ArticleStatus.post;
          break;
        case 'draft':
          this.listInfo.filterStatus = ArticleStatus.draft;
          break;
      }
    });
  }

  ngOnInit() {
    if (!this.global.hexoDir) {
      this.router.navigate(['/home/no-data']);
    }

    this.refresh();
  }

  ngAfterViewInit(): void {
    this.cards.changes.subscribe(() => this.updateTagState());
  }

  public refresh(): void {
    this.previewArticle = null;
    if (!this.dataService.hasLoadFile()) {
      let self = this;
      this.dataService
        .refresh()
        .subscribe(() => {
          self.dataService.getList(self.listInfo).subscribe(list => {
            self.articles = list;
          });
        });
    } else {
      this.dataService.getList(this.listInfo).subscribe(list => {
        this.articles = list;
      });
    }
  }

  public onCardClick(article: Article): void {
    let event = window.event;
    event.stopPropagation();

    if (this.dataService.getSelectionMode() === SelectionMode.multi) {
      if (this.dataService.isSelected(article.id)) {
        this.dataService.diselect(article.id);
      } else {
        this.dataService.setSelected(article.id);
      }
      this.previewArticle = null;
      return;
    }

    if (this.previewArticle && this.previewArticle.id === article.id) {
      this.dataService.diselect(article.id);
      this.previewArticle = null;
      return;
    }

    this.dataService.setSelected(article.id);
    this.previewArticle = article;
  }

  public onTagClick(tag: string): void {
    let filterTags = this.listInfo.filterTags;
    if (_.isNil(filterTags)) {
      this.listInfo.filterTags = [];
    }
    if (!filterTags.includes(tag)) {
      filterTags.push(tag);
    } else {
      this.listInfo.filterTags = filterTags.filter(e => e !== tag);
      if (_.isEmpty(filterTags)) {
        this.listInfo.filterTags = null;
      }
    }
    this.refresh();
  }

  public onOutSideClick(): void {
    this.dataService.diselect();
    this.previewArticle = null;
    if (this.dataService.getSelectionMode() === SelectionMode.multi) {
      this.dataService.changeSelectionMode();
    }
  }

  private updateTagState(): void {
    let filterTags = this.listInfo.filterTags;
    this.cards.forEach(e => e.buttons.forEach(b => {
      let buttonTag = b.nativeElement.innerText;
      b.nzType = filterTags && filterTags.includes(buttonTag) ? 'dashed' : 'primary';
    }));
  }

}
