import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './editor.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'editor/:id', component: EditorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EditorRoutingModule {
}
