import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userEmail:new FormControl(' ',{validators:[Validators.required,Validators.email]}),
      userPwd: new FormControl('',{validators:[Validators.required]})
    });
  
  }
  onSubmit()
  {
    console.log(this.loginForm)

  }

}
