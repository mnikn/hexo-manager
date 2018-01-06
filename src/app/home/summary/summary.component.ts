import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Global } from '../../global';
import { ArticleListInfo } from '../../core/service/list-processor/list-processor';

@Component({
  selector: 'app-home-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  public listInfo: ArticleListInfo;

  constructor(public router: Router,
              private global: Global) {
  }

  ngOnInit() {
    if (!this.global.hexoDir) {
      this.router.navigate(['/home/no-data']);
    }
  }

}
