import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MenuComponent } from './menu/menu.component';
import { SummaryComponent } from './summary/summary.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [],
  declarations: [
    HomeComponent,
    MenuComponent,
    SummaryComponent,
    ToolBarComponent,
    ArticleListComponent]
})
export class HomeModule {
}
