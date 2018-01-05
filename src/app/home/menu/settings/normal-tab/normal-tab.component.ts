import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare let electron: any;

@Component({
  selector: 'app-settings-normal-tab',
  templateUrl: './normal-tab.component.html',
  styleUrls: ['./normal-tab.component.css']
})
export class NormalTabComponent implements OnInit {

  @Output() isProcessing: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public setHexoDir(): void {
    let dialog = electron.remote.dialog;
    let blogDir = dialog.showOpenDialog({properties: ['openDirectory']})[0];
    let dirs = {
      rootDir: blogDir,
      postDir: blogDir + '/source/_posts/',
      draftDir: blogDir + '/source/_drafts/'
    };
    let fs = electron.remote.require('fs');
    this.isProcessing.emit(true);
    fs.writeFile('./dist/config.json', JSON.stringify(dirs), 'utf8', (err) => {
      this.isProcessing.emit(false);
    });
  }

}
