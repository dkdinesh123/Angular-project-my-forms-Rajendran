import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goTest1()
  {
    this.router.navigate(['/user',1]);
  }
  goTest2()
  {
    this.router.navigate(['/user',0]);
  }
}
