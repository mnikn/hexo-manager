import { Command } from './command';

export class Button {
  public title: string;
  public icon: string;
  public size = 'default';
  public shape: string;
  public type = 'default';
  public hintPlacement = 'bottom';
  public command: Command;

  constructor(title: string, shape: string, command: Command, size?: string, icon?: string) {
    this.title = title;
    this.icon = icon;
    this.size = size;
    this.shape = shape;
    this.command = command;
  }
}
