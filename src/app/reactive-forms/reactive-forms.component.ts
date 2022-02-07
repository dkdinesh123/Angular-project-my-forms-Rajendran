import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})

export class ReactiveFormsComponent implements OnInit {
  genders = ['Male','Female','Others'];
  forbiddenUsernames= ['admin','detail','customer','sales']
  signupForm!:FormGroup;
 
  constructor() { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userName': new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([]),

    });
  }

  onAddHobby()
  {
  const control = new FormControl(null,Validators.required);
  (this.signupForm.get('hobbies') as FormArray).push(control);
  }

  onSubmit()
  {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  // forbiddenNames

  forbiddenNames(control: FormControl):{[txt: string]:boolean} | null
  {
    if(this.forbiddenUsernames.indexOf(control.value)!== -1)
    {
      return {'nameIsForbidden':true}; 
    }
    return null;
  }


  // forbiddenEmails
  forbiddenEmails(control:FormControl): Promise<any> | Observable<any>
  {
    const promise = new Promise(
      (resolve,reject)=>{
        setTimeout(()=>{
            if(control.value === 'det@detail.com' || control.value === 'adm@admin.com')
            {
              resolve({'emailIsForbidden': true});
            }
            else
            {
              resolve(null);
            }
        },1500);
      });
      return promise;
  }
}
