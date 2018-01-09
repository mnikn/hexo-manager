export interface FileWriter<T> {
  writeFileSync(data: T, path: string): void;
  createSync(data: T, path: string): T;
  deleteSync(path: string): void;
  updateSync(data: T, path: string): T;
}
