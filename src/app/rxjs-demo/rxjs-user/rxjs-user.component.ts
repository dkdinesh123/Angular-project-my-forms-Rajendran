import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RxjsService } from '../rxjs.service';

@Component({
  selector: 'app-rxjs-user',
  templateUrl: './rxjs-user.component.html',
  styleUrls: ['./rxjs-user.component.css']
})
export class RxjsUserComponent implements OnInit {

  id!:number;
  
  constructor(public aRoute:ActivatedRoute,public service:RxjsService) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe(
      (param:Params) =>
      {
        this.id = +param['id'];
      }
    );
  }

  onActivate()
  {
    this.service.activatedEmitter.emit(true);
  }

  onDeActivate()
  {

    this.service.deactivatedSubject.next(false);

  }

}
