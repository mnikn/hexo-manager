import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ButtonGroupComponent } from './button-group/button-group.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    ButtonComponent,
    ButtonGroupComponent
  ],
  declarations: [ButtonComponent, ButtonGroupComponent]
})
export class ComponentModule {
}
