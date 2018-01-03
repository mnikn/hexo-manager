import { TestBed, inject } from '@angular/core/testing';

import { ArticleDataService } from './article-data.service';
import { Article } from '../../core/model/article';

describe('ArticleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleDataService]
    });

    let articles = [new Article(), new Article(), new Article()];

    let i = 0;
    articles.forEach(e => e.id = i++);
    i = 1;
    articles.forEach(e => e.content = 'Content' + i++);
    i = 1;
    articles.forEach(e => e.title = '设计模式之禅' + i++);
    articles.forEach(e => e.createDate = new Date());
    articles.forEach(e => e.tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']);
  });

  it('should be created', inject([ArticleDataService], (service: ArticleDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should can remove item', inject([ArticleDataService], (service: ArticleDataService) => {
    service.createItem().subscribe();
    expect(service.removeItem(3).subscribe());
    expect(service.removeItem(2).subscribe());
    expect(service.removeItem(1).subscribe());
    expect(service.removeItem(0).subscribe());
  }));
});
