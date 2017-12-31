import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-summary',
  templateUrl: './summary.component.html'
})
export class SummaryComponent implements OnInit {

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
