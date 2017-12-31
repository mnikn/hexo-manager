import { Component, OnInit } from '@angular/core';
import { articleStatus } from '../../core/model/article-status';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public currentArticleStatus: articleStatus;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe(value => {
      switch (value[1].path) {
        case 'post':
          this.currentArticleStatus = articleStatus.post;
          break;
        case 'draft':
          this.currentArticleStatus = articleStatus.draft;
          break;
      }
    });
  }

  ngOnInit() {
  }

}
