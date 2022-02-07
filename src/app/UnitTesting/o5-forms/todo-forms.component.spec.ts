import { FormBuilder } from "@angular/forms";
import { TodoFormsComponent } from "./todo-forms.component";


describe('TodoFormsComponent',()=>{
    let todoForms: TodoFormsComponent;
    beforeEach(()=>{
        todoForms = new  TodoFormsComponent(new FormBuilder());
    });
    it('Should be Create Todo Forms Instance',()=>{
        expect(todoForms).toBeTruthy();
    });
    it('Should be Create  a form with two Form controls',()=>{
        expect(todoForms.form?.contains('userName')).toBeTruthy();
        expect(todoForms.form?.contains('email')).toBeTruthy();
    });
    it('Should Make the username-1 Control required',()=>{
        const control = todoForms.form?.get('userName');
        control?.setValue('Dinesh');
        expect(control?.valid).toBeTruthy();
    });
    it('Should Make the username-2 Control required',()=>{
        const control = todoForms.form?.get('userName');
        control?.setValue('');
        expect(control?.valid).toBeFalsy();
    });
    it('Should Make the email Control required',()=>{
        const control = todoForms.form?.get('email');
        control?.setValue('dinesh@gmail.com');
        expect(control?.valid).toBeTruthy();
    });
})