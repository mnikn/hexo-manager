import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.initTranslation();
  }

  private initTranslation(): void {
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('en');

    let browserLanguage = this.translateService.getBrowserLang();
    this.translateService.use(browserLanguage.match(/en|zh/) ? browserLanguage : 'en');
  }
}
