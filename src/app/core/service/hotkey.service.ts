import { Injectable } from '@angular/core';
import { HotkeysService } from 'angular2-hotkeys';

@Injectable()
export class HotkeyService {

  constructor(private service: HotkeysService) {
  }

  public clear(): void {
    this.service.mousetrap.reset();
  }

  public bindKey(key: string, action: () => void): HotkeyService {
    this.service.mousetrap.bind(key, () => {
      action();
      return false;
    });
    return this;
  }

}
