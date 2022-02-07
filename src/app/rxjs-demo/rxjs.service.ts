import { Injectable,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  activatedEmitter = new EventEmitter<boolean>();

  activatedSubject = new Subject<boolean>();
  deactivatedSubject: any;
  constructor() { }
}
