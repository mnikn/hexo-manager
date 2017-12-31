import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { EditorRoutingModule } from './editor-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../core/component/component.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorRoutingModule,
    ComponentModule,
    NgZorroAntdModule,
    TranslateModule
  ],
  declarations: [
    EditorComponent,
    ToolBarComponent]
})

export class EditorModule {
}
