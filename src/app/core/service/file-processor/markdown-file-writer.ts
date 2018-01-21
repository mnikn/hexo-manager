import { Injectable } from '@angular/core';
import { FileWriter } from './file-writer';
import { Article } from '../../model/article';
import { DatePipe } from '@angular/common';
declare let electron: any;

@Injectable()
export class MarkdownFileWriter implements FileWriter<Article> {

  writeFileSync(data: Article, path: string): void {
    let fs = electron.remote.require('fs');
    fs.writeFileSync(path, this.toMarkdownContent(data), 'utf8');
  }

  createSync(data: Article, path: string): Article {
    this.writeFileSync(data, path);
    data.path = path;
    return data;
  }

  deleteSync(path: string): void {
    let fs = electron.remote.require('fs');
    fs.unlinkSync(path);
  }

  updateSync(data: Article, path: string): Article {
    this.deleteSync(data.path);
    return this.createSync(data, path);
  }

  private toMarkdownContent(article: Article): string {
    let str = '';
    str += '---\n';
    str += 'title: ' + article.title + '\n';
    str += 'date: ' + new DatePipe('en-us')
        .transform(article.createDate, 'yyyy-MM-dd hh:mm:ss') + '\n';
    str += 'tags: [';
    for (let i = 0; i < article.tags.length; ++i) {
      str += article.tags[i];
      if (i !== article.tags.length - 1) {
        str += ',';
      }
    }
    str += ']\n';
    str += '---\n';
    str += article.content;
    return str;
  }

}
