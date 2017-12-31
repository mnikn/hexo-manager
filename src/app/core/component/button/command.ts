export interface ICommand {
  execute(): any;
}

export abstract class Command implements ICommand {
  private _user: any;

  constructor(user?: any) {
    this.user = user;
  }

  get user(): any {
    return this._user;
  }

  set user(value: any) {
    this._user = value;
  }

  execute() {
    throw new Error('Method not implemented.');
  }
}


