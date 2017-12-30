import { Component, OnInit } from '@angular/core';
import { articleStatus } from '../../core/model/article-status';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  public showArticleStatus: articleStatus;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.url.subscribe(value => {
      switch (value[1].path) {
        case 'post':
          this.showArticleStatus = articleStatus.post;
          break;
        case 'draft':
          this.showArticleStatus = articleStatus.draft;
          break;
      }
    });
    // this.route.paramMap.forEach((params) => {
    //   this.selectStatus = Number(params.get('status'));
    //   this.getArticles();
    // });
  }

}
