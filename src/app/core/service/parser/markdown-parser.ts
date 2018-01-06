import { SyntaxParser } from './syntax-parser';
import * as marked from 'marked';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
declare let electron: any;

@Injectable()
export class MarkdownParser implements SyntaxParser<string> {

  constructor() {
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
        return electron.remote.require('highlight.js').highlightAuto(code).value;
      }
    });
  }

  parse(content: string): string {
    return marked.parse(content);
  }

}
