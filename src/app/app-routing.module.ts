import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BlogsComponent } from "./blogs/blogs.component";
import { HomeComponent } from "./IntegrationTesting/home/home.component";
import { IntegrationRoutingModule } from "./IntegrationTesting/integration/integration-routing.module";
import { IntegrationComponent } from "./IntegrationTesting/integration/integration.component";
import { UserDetailsComponent } from "./IntegrationTesting/user-details/user-details.component";
import { UserComponent } from "./IntegrationTesting/user/user.component";
import { MyPipesComponent } from "./my-pipes/my-pipes.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ReactiveFormsComponent } from "./reactive-forms/reactive-forms.component";
import { RxjsDemoComponent } from "./rxjs-demo/rxjs-demo.component";
import { RxjsHomeComponent } from "./rxjs-demo/rxjs-home/rxjs-home.component";
import { RxjsUserComponent } from "./rxjs-demo/rxjs-user/rxjs-user.component";
import { LoginComponent } from "./td-forms/auth/login/login.component";
import { SignupComponent } from "./td-forms/auth/signup/signup.component";
import { TdFormsComponent } from "./td-forms/td-forms.component";
import { CurrentTrainingComponent } from "./td-forms/training/current-training/current-training.component";
import { NewTrainingComponent } from "./td-forms/training/new-training/new-training.component";
import { PastTrainingComponent } from "./td-forms/training/past-training/past-training.component";
import { TrainingComponent } from "./td-forms/training/training.component";
import { WelcomeComponent } from "./td-forms/training/welcome/welcome.component";
import { MyVoteComponent } from "./UnitTesting/o7-spies/08-vote/my-vote.component";



const routes:Routes = [
  {path:'', redirectTo:'/home' ,pathMatch:'full'},
    {path:'rxjs', component: RxjsDemoComponent,children:
    [
     
      {path:'rxhome', component: RxjsHomeComponent},
      {path:'rxuser/:id', component: RxjsUserComponent},
  
    ]},
    {path:'td-forms', component:TdFormsComponent,children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'signup',component:SignupComponent},
      {path:'login',component:LoginComponent},
     
      {path:'training',component:TrainingComponent,children:[
        {path:'current', component:CurrentTrainingComponent},
        {path:'new',component:NewTrainingComponent},
        {path:'past',component:PastTrainingComponent}
      ]}
    ]},
    {path:'reactive-forms',component:ReactiveFormsComponent},
    {path:'pipes',component:MyPipesComponent},
    {path:'blogs',component:BlogsComponent},
    {path:'my-voting',component:MyVoteComponent},
    {path:'integration',component:IntegrationComponent},
    {path:'user',component:UserComponent},
    {path:'user/:id',component:UserDetailsComponent},

    {path:'home',component:HomeComponent},
    {path:'not-found',component:PageNotFoundComponent},
   
    {path:'**',redirectTo:'./not-found', pathMatch:'full'},
   

  ];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
      
    ],
    exports:[
        RouterModule,
        
    ]
})



export class AppRoutingModule
{


}