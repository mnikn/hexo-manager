import { SyntaxParser } from './syntax-parser';
import * as marked from 'marked';
import { Injectable } from '@angular/core';

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
      smartypants: false
    });
  }

  parse(content: string): string {
    return marked.parse(content);
  }

}
