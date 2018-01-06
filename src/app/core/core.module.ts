import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDataService } from './service/article-data.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [ArticleDataService]
})
export class CoreModule {
}
