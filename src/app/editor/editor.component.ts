import { Component, OnInit } from '@angular/core';
import { Article } from '../core/model/article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  public contentHeight: number = window.screen.height;
  public article: Article;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
