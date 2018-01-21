import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { EditorRoutingModule } from './editor-routing.module';
import { RouterModule } from '@angular/router';
import { ComponentModule } from '../core/component/component.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule } from '@ngx-translate/core';
import { SIMPLEMDE_CONFIG, SimplemdeModule } from 'ng2-simplemde';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorRoutingModule,
    ComponentModule,
    NgZorroAntdModule,
    TranslateModule,
    ReactiveFormsModule,
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG,
      useValue: {
        autofocus: true,
        placeholder: '用Markdown开始写作...',
        spellChecker: false,
        renderingConfig: {
          codeSyntaxHighlighting: true
        },
        tabSize: 4
      }
    })
  ],
  providers: [],
  declarations: [
    EditorComponent,
    ToolBarComponent,
    InfoModalComponent]
})

export class EditorModule {
}
