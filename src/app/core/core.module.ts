import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDataService } from './service/article-data.service';
import { HotkeyModule } from 'angular2-hotkeys';
import { HotkeyService } from './service/hotkey.service';

@NgModule({
  imports: [
    CommonModule,
    HotkeyModule
  ],
  declarations: [],
  providers: [ArticleDataService, HotkeyService]
})
export class CoreModule {
}
