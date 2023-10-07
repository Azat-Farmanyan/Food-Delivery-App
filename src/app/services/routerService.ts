import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  previousPath = new BehaviorSubject<string>('');
  currentPath = new BehaviorSubject<string>('');

  constructor() {}
}
