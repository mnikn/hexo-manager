import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() rawContent: string;
  @Output() outputContent: string;

  constructor() {
  }

  ngOnInit() {
  }

  public process(rawContent: string): string {
    this.outputContent = rawContent;
    return this.outputContent;
  }

}
