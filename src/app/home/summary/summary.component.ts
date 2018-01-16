import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from '../../global';
import { ArticleListInfo } from '../../core/service/list-processor/list-processor';
import { Article, ArticleStatus } from '../../core/model/article';
import { ArticleDataService } from '../../core/service/article-data.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  public listInfo: ArticleListInfo = new ArticleListInfo();
  public articles: Article[];

  constructor(public router: Router,
              public dataService: ArticleDataService,
              private global: Global) {
  }

  ngOnInit() {
    if (!this.global.hexoDir) {
      this.router.navigate(['/home/no-data']);
    }

    this.listInfo.filterStatus = ArticleStatus.post;

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

}
