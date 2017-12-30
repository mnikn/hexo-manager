import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nz-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css']
})
export class IconButtonComponent implements OnInit {

  @Input() nzTitle: string;
  @Input() icon: string;
  @Input() nzSize = 'large';

  constructor() {
  }

  ngOnInit() {
  }

}
