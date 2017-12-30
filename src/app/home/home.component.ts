import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  @ViewChild(MenuComponent) public menu: MenuComponent;

  constructor() { }

  ngOnInit() {
  }

}
