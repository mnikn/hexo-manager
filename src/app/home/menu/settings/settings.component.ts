import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  public isVisible = false;
  public isProcessing = false;

  constructor() {
  }

  ngOnInit() {
  }

  public onCancel(): void {
    this.isVisible = false;
  }

  public onOk(): void {
    this.isVisible = false;
  }

}
