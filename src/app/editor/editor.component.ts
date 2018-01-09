import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../core/model/article';
import { ActivatedRoute, Router } from '@angular/router';
import SimpleMDE = require('simplemde');
import { ArticleDataService } from '../core/service/article-data.service';
import { Simplemde } from 'ng2-simplemde';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {


  public contentHeight: number = window.screen.height;
  public article: Article;
  @ViewChild('editor') private editor: Simplemde;


  constructor(public router: Router,
              private route: ActivatedRoute,
              private dataService: ArticleDataService) {
  }

  ngOnInit() {
    let self = this;
    this.route.paramMap.subscribe(
      e => self.article = self.dataService.getItem(Number(e.get('id'))));
  }

  ngAfterViewInit(): void {
    let self = this;
    this.editor.registerOnChange(value => self.article.content = value);
  }

}
