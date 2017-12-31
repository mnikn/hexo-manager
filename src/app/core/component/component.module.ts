import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonGroupComponent } from './button-group/button-group.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent,
    PreviewComponent
  ],
  declarations: [
    ButtonComponent,
    ButtonGroupComponent,
    PreviewComponent]
})
export class ComponentModule {
}
