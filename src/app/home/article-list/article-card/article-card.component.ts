import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../../core/model/article';

@Component({
  selector: 'app-home-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  @Input() public article: Article;
  public isSelected: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  public onTagClick(tag: string): void {
    let event = window.event;
    event.stopPropagation();

    console.log(tag);
  }

}
