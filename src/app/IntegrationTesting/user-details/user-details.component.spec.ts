import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { UserDetailsComponent } from './user-details.component';

class RouterStub
{
  navigate(param : any)
  {

  }
}
class ActivatedRouteStub
{
  private subject = new Subject();
  push(value:any)
  {
    this.subject.next(value);
  }
  get params()
  {
    return this.subject.asObservable();
  }

}


describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers:[
        {provide : Router,useClass:RouterStub},
        {provide : ActivatedRoute,useClass:ActivatedRouteStub},
        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create the userDetails Instance', () => {
    expect(component).toBeTruthy();
  });

  it('Should redirect the user to the users page after save',()=>
  {
    let router = TestBed.inject(Router);
    let spy = spyOn(router,'navigate');
    component.save();
    expect(spy).toHaveBeenCalledWith(['user']);
  })

  // it('Should Navigate the user to the not found page when an invalid user id is passed',()=>{
  //   let router = TestBed.inject(Router);
  //   let spy = spyOn(router,'navigate');
  //   let aRoute : ActivatedRouteStub = TestBed.inject(ActivatedRoute);
  //   aRoute.push({id:0});
  //   expect(spy).toHaveBeenCalledWith(['not-found']);

  // })
});
