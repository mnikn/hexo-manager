import { Component, Input, OnInit } from '@angular/core';
import { Button } from './button';

@Component({
  selector: 'app-nz-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() model: Button;

  constructor() {
  }

  ngOnInit() {
  }

}
