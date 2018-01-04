export interface ICommand {
  execute(): any;
}

export abstract class Command implements ICommand {
  private _user: any;
  private _container: any;

  constructor(user?: any, container?: any) {
    this.user = user;
    this.container = container;
  }

  get user(): any {
    return this._user;
  }

  set user(value: any) {
    this._user = value;
  }

  get container(): any {
    return this._container;
  }

  set container(value: any) {
    this._container = value;
  }

  execute() {
    throw new Error('Method not implemented.');
  }
}


