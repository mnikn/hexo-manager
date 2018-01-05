import { Observable } from 'rxjs/Observable';
export interface FileReader<T> {
  readFile(path: string): Observable<T>;
  readDirectorySync(path: string): T[];
}

