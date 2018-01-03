import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleStatus } from '../../core/model/article';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticleDataService } from './article-data.service';

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
    if (this.previewArticle && this.previewArticle.id === article.id) {
      this.dataService.diselectItem(article.id);
      this.previewArticle = null;
      return;
    }

    this.dataService.selectItem(article.id);
    this.previewArticle = article;
  }

}
