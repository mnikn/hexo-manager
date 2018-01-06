import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Global } from './global';
declare let electron: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private translateService: TranslateService,
              private global: Global) {
  }

  ngOnInit(): void {
    this.initTranslation();
    let self = this;
    let fs = electron.remote.require('fs');
    let configPath = './dist/config.json';
    if (fs.existsSync(configPath)) {
      self.global.hexoDir = JSON.parse(fs.readFileSync(configPath));
    }
  }

  private initTranslation(): void {
    this.translateService.addLangs(['zh', 'en']);
    this.translateService.setDefaultLang('en');

    let browserLanguage = this.translateService.getBrowserLang();
    this.translateService.use(browserLanguage.match(/en|zh/) ? browserLanguage : 'en');
  }
}
