import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @ViewChild(MenuComponent) public menu: MenuComponent;
  @ViewChild(ToolBarComponent) public toolBar: ToolBarComponent;
  public content: any;

  constructor() {
  }

  ngOnInit() {
  }

  public onRouterOutletActivate(event): void {
    this.content = event;
  }

}
