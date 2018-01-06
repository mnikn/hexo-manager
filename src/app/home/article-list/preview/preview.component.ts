import { Component, Input, OnInit } from '@angular/core';
import { ArticleDataService } from '../../../core/service/article-data.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() previewArticleId: number;

  constructor(public dataService: ArticleDataService) {
  }

  ngOnInit() {
  }

}
