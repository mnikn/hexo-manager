import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { SummaryComponent } from './summary/summary.component';
import { ArticleListComponent } from './article-list/article-list.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'summary', component: SummaryComponent},
      {path: 'article-list/post', component: ArticleListComponent},
      {path: 'article-list/draft', component: ArticleListComponent},
      {path: '', component: SummaryComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule {
}
