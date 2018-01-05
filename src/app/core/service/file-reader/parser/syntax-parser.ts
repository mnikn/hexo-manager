export interface SyntaxParser<T> {
  parse(content: string): T;
}
