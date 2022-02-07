import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { UserDetailsComponent } from "../user-details/user-details.component";
import { UserComponent } from "../user/user.component";
import { IntegrationComponent } from "./integration.component";


const routes: Routes=[
 
    {path:'user',component:UserComponent},
    {path:'user/:id',component:UserDetailsComponent}

]

@NgModule
({
    // declarations:[
    //     UserComponent,
    //     UserDetailsComponent
    // ],
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
    providers:[]

})
export class IntegrationRoutingModule
{

}