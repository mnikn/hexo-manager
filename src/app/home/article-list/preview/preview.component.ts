import { Component, Input, OnInit } from '@angular/core';
import { ArticleDataService } from '../../../core/service/article-data.service';

@Component({
  selector: 'app-article-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  public previewContent: string;

  constructor(public dataService: ArticleDataService) {
  }

  ngOnInit() {
  }

  @Input()
  set previewArticleId(id: number) {
    this.dataService.getPreviewContent(id).subscribe(content => {
      this.previewContent = content;
    });
  }

}
