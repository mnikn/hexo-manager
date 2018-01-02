import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article, ArticleStatus } from '../../core/model/article';
import { ArticleCardComponent } from "./article-card/article-card.component";

@Component({
  selector: 'app-home-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public currentArticleStatus: ArticleStatus;
  public previewArticle: Article;
  public contentHeight: number = window.screen.height;
  public articles: Article[] = [new Article(), new Article(), new Article(), new Article()];
  @ViewChildren(ArticleCardComponent)
  cards: QueryList<ArticleCardComponent>;

  constructor(public router: Router,
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
    let i = 1;
    this.articles.forEach(e => e.id = i++);
    i = 1;
    this.articles.forEach(e => e.content = 'Content' + i++);
    i = 1;
    this.articles.forEach(e => e.title = '设计模式之禅' + i++);
    this.articles.forEach(e => e.createDate = new Date());
    this.articles.forEach(e => e.tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']);
  }

  public onCardClick(article: Article): void {
    if (this.previewArticle && this.previewArticle.id === article.id) {
      this.previewArticle = null;
      this.cards.forEach(e => e.isSelected = false);
      return;
    }

    this.previewArticle = article;
    this.cards.forEach(e => e.isSelected = false);
    this.cards
      .filter(e => e.article.id === article.id)
      .forEach(e => e.isSelected = true);
  }

}
