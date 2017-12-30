import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isCollapsed: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
