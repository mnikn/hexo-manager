import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article, ArticleStatus } from '../../core/model/article';

@Component({
  selector: 'app-home-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public currentArticleStatus: ArticleStatus;
  public contentHeight: number = window.screen.height;
  public articles: Article[] = [new Article(), new Article(), new Article(), new Article()];

  constructor(private route: ActivatedRoute) {
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
  }

}
