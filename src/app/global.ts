import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class Global {
  public hexoDir: any;
  public command = {
    deploy: 'hexo g && hexo d'
  };

  public hasConfiguration(): boolean {
    return !_.isNil(this.hexoDir);
  }
}
