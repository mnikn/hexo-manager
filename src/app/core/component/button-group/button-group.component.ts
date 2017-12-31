import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-nz-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  @Input() buttons: Button[];

  constructor() {
  }

  ngOnInit() {
  }

}
