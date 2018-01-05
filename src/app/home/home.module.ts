import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MenuComponent } from './menu/menu.component';
import { SummaryComponent } from './summary/summary.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ComponentModule } from '../core/component/component.module';
import { TranslateModule } from '@ngx-translate/core';
import { ArticleCardComponent } from './article-list/article-card/article-card.component';
import { FormsModule } from '@angular/forms';
import { SettingsComponent } from './menu/settings/settings.component';
import { NormalTabComponent } from './menu/settings/normal-tab/normal-tab.component';
import { PerformanceTabComponent } from './menu/settings/performance-tab/performance-tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    TranslateModule,
    HomeRoutingModule,
    ComponentModule
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
    ArticleListComponent,
    ArticleCardComponent,
    SettingsComponent,
    NormalTabComponent,
    PerformanceTabComponent]
})
export class HomeModule {
}
