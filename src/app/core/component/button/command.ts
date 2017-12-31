export interface ICommand {
  execute(): any;
}

export abstract class Command implements ICommand {
  public user: any;

  constructor(user?: any) {
    this.user = user;
  }

  execute() {
    throw new Error('Method not implemented.');
  }
}


