import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class TodoFormsComponent
{
   
    form?:FormGroup;
    constructor(fb: FormBuilder)
    {
        this.form = fb.group
        ({
            userName:['',Validators.required],
            email:['',[Validators.required, Validators.email]]
        });
    }
}