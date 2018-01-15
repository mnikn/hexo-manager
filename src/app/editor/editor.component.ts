import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../core/model/article';
import { ActivatedRoute, Router } from '@angular/router';
import SimpleMDE = require('simplemde');
import { ArticleDataService } from '../core/service/article-data.service';
import { Simplemde } from 'ng2-simplemde';
import { InfoModalComponent } from "./info-modal/info-modal.component";
import * as _ from 'lodash';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {


  public contentHeight: number = window.screen.height;
  public outputArticle: Article;
  public inputArticle: Article;
  @ViewChild('editor') private editor: Simplemde;
  @ViewChild(InfoModalComponent) private infoModal: InfoModalComponent;


  constructor(public router: Router,
              private route: ActivatedRoute,
              private dataService: ArticleDataService) {
  }

  ngOnInit() {
    let self = this;
    this.route.paramMap.subscribe(
      e => {
        self.inputArticle = self.dataService.getItem(Number(e.get('id')));
        self.outputArticle = _.cloneDeep(self.inputArticle);
      });
  }

  ngAfterViewInit(): void {
    let self = this;
    this.editor.registerOnChange(value => self.outputArticle.content = value);
  }

  public showInfoModal(): void {
    this.infoModal.showModal(this.outputArticle);
  }

}
