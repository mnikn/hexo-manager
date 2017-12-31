import { Component, Input, OnInit } from '@angular/core';
import { Button } from '../../core/component/button/button';
import { TranslateService } from '@ngx-translate/core';
import { BackWardCommand } from "./command/backward-command";

@Component({
  selector: 'app-editor-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {

  private _user: any;
  public buttons: Button[];

  constructor(private translateService: TranslateService) {
  }

  ngOnInit() {
  }

  @Input()
  set user(value: any) {
    if (!this.buttons) {
      this.translateService
        .get('editor.tool_bar')
        .subscribe(tool_bar => {
          const size = 'large';
          const shape = 'circle';

          this.buttons = [
            new Button(tool_bar.backward, shape, new BackWardCommand(value), size, 'anticon anticon-backward')
          ];
        });
    } else {
      this.buttons.forEach(e => e.command.user = value);
    }
    this._user = value;
  }
}
