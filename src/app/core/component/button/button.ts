import { Command } from './command';

export class Button {
  private _title: string;
  private _icon: string;
  private _size = 'default';
  private _shape: string;
  private _type = 'default';
  private _hintPlacement = 'bottom';
  private _command: Command;
  private _disabled = false;

  constructor(title: string, shape: string, command: Command, size?: string, icon?: string) {
    this.title = title;
    this.icon = icon;
    this.size = size;
    this.shape = shape;
    this.command = command;
  }


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(value: string) {
    this._icon = value;
  }

  get size(): string {
    return this._size;
  }

  set size(value: string) {
    this._size = value;
  }

  get shape(): string {
    return this._shape;
  }

  set shape(value: string) {
    this._shape = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get hintPlacement(): string {
    return this._hintPlacement;
  }

  set hintPlacement(value: string) {
    this._hintPlacement = value;
  }

  get command(): Command {
    return this._command;
  }

  set command(value: Command) {
    this._command = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }
}
