import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
 userId!:number;
  constructor(private router:Router, private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe((param: Params)=>{
      if(param['id'] ==0)
      {
        this.router.navigate(['not-found']);
      }
      else
      {
        this.userId = +param['id'];
      }
    })
  }

  save()
  {
    this.router.navigate(['user']);
  }

}
