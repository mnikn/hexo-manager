import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsComponent } from './settings/settings.component';

@Component({
  selector: 'app-home-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(SettingsComponent) settingsModal: SettingsComponent;
  public isCollapsed: boolean;


  constructor() {
  }

  ngOnInit() {
  }

  public toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  public showSettingsModal(): void {
    this.settingsModal.isVisible = true;
  }

}
