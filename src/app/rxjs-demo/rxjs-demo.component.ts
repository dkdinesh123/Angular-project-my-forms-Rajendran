import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { RxjsService } from './rxjs.service';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
userActivated = false;
// userDeActivated = false;

activatedSub!: Subscription;
// deactivatedSub!: Subscription;
  constructor(public service: RxjsService)

  {

  }
  ngOnInit():void{
    this.activatedSub = this.service.activatedEmitter.subscribe(
      (didActivate) =>
      {
        this.userActivated = didActivate;
      });
  }

  // ngOnInit():void{
  //   this.deactivatedSub = this.service.deactivatedSubject.subscribe(
  //     (didDeActivate: boolean) =>
  //     {
  //       this.userDeActivated = didDeActivate;
  //     });
  // }

  ngOnDestroy():void
  {
    this.activatedSub.unsubscribe();
  }

}
