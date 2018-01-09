import { Article } from '../../model/article';
import { FileReader } from './file-reader';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
declare let electron: any;

@Injectable()
export class MarkdownFileReader implements FileReader<Article> {

  private nextId = 0;

  readFile(path: string): Observable<Article> {
    let self = this;
    return Observable.create(function (observer) {
      let article = self.readFileSync(path);
      observer.next(article);
    });
  }

  readFileSync(path: string): Article {
    let fs = electron.remote.require('fs');
    let readline = electron.remote.require('readline');

    let article = new Article();
    article.content = '';

    let infoLines = 0;
    let lines = fs.readFileSync(path).toString().split('\n');
    for (let line of lines) {
      if (infoLines < 2 && line.includes('title: ')) {
        article.title = this.parseTitle(line);
      } else if (infoLines < 2 && line.includes('date: ')) {
        article.createDate = this.parseTime(line);
      } else if (infoLines < 2 && line.includes('tags: ')) {
        article.tags = this.parseTags(line);
      } else if (infoLines >= 2) {
        article.content += (line + '\n');
      } else if (line === '---') {
        ++infoLines;
      }
    }
    article.path = path;
    return article;
  }

  readDirectorySync(path: string): Article[] {
    let fs = electron.remote.require('fs');
    let articles = [];
    let files = fs.readdirSync(path);
    for (let file of files) {
      if (file.substr(file.lastIndexOf('.')) === '.md') {
        let article = this.readFileSync(path + file);
        article.id = this.nextId++;
        articles.push(article);
      }
    }
    return articles;
  }

  private parseTitle(line: string): string {
    let startIndex = line.indexOf('title: ') + 'title: '.length;
    return line.substring(startIndex);
  }

  private parseTime(line: string): Date {
    let startIndex = line.indexOf('date: ') + 'date: '.length;
    let str = line.substring(startIndex);
    let date = str.split('-');
    let day = date[2].split(' ');
    let time = day[1].split(':');
    return new Date(Number.parseInt(date[0]),
      Number.parseInt(date[1]) - 1,
      Number.parseInt(day[0]),
      Number.parseInt(time[0]),
      Number.parseInt(time[1]),
      Number.parseInt(time[2]));
  }

  private parseTags(line: string): string[] {
    let trimLine = line.substring(line.indexOf('[') + 1, line.indexOf(']'));
    let tags: string[] = [];
    for (let tagStr of trimLine.split(',')) {
      tags.push(tagStr);
    }
    return tags;
  }

}
