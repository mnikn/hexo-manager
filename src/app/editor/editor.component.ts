import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Article } from '../core/model/article';
import { Router } from '@angular/router';
import SimpleMDE = require('simplemde');

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit, AfterViewInit {


  public contentHeight: number = window.screen.height;
  public article: Article;
  @ViewChild('editor') private editor: any;


  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.editor.simplemde);
    SimpleMDE.toggleSideBySide(this.editor.simplemde);
  }

}
