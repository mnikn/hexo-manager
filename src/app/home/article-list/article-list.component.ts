import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleStatus } from '../../core/model/article';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDataService, SelectionMode } from '../../core/service/article-data.service';

@Component({
  selector: 'app-home-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public currentArticleStatus: ArticleStatus;
  public previewArticle: Article;
  public contentHeight: number = window.screen.height;
  public articles: Article[];
  @ViewChildren(ArticleCardComponent)
  cards: QueryList<ArticleCardComponent>;

  constructor(public router: Router,
              public dataService: ArticleDataService,
              private route: ActivatedRoute) {
    this.route.url.subscribe(value => {
      switch (value[1].path) {
        case 'post':
          this.currentArticleStatus = ArticleStatus.post;
          break;
        case 'draft':
          this.currentArticleStatus = ArticleStatus.draft;
          break;
      }
    });
  }

  ngOnInit() {
    this.dataService
      .refresh()
      .subscribe(list => {
        this.articles = list;
      });
  }

  public onCardClick(article: Article): void {
    let event = window.event;
    event.stopPropagation();

    if (this.dataService.getSelectionMode() === SelectionMode.multi) {
      if (this.dataService.isItemSelected(article.id)){
        this.dataService.diselectItem(article.id);
      } else {
        this.dataService.selectItem(article.id);
      }
      this.previewArticle = null;
      return;
    }

    if (this.previewArticle && this.previewArticle.id === article.id) {
      this.dataService.diselectItem(article.id);
      this.previewArticle = null;
      return;
    }

    this.dataService.selectItem(article.id);
    this.previewArticle = article;
  }

  public onOutSideClick(): void {
    if (this.dataService.getSelectionMode() === SelectionMode.multi) {
      this.dataService.diselect();
      this.dataService.changeSelectionMode();
    }
  }

}
