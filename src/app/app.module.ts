import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout'
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { RxjsHomeComponent } from './rxjs-demo/rxjs-home/rxjs-home.component';
import { RxjsUserComponent } from './rxjs-demo/rxjs-user/rxjs-user.component';

import { MaterialModule } from './material/material.module';
import { TdFormsComponent } from './td-forms/td-forms.component';
import { LoginComponent } from './td-forms/auth/login/login.component';

import { SignupComponent } from './td-forms/auth/signup/signup.component';
import { TrainingComponent } from './td-forms/training/training.component';
import { CurrentTrainingComponent } from './td-forms/training/current-training/current-training.component';
import { NewTrainingComponent } from './td-forms/training/new-training/new-training.component';
import { PastTrainingComponent } from './td-forms/training/past-training/past-training.component';
import { WelcomeComponent } from './td-forms/training/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPipesComponent } from './my-pipes/my-pipes.component';
import { ShortenPipe } from './my-pipes/shorten.pipe';
import { FilterPipe } from './my-pipes/filter.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BlogsComponent } from './blogs/blogs.component';
import { LoggingInterceptorService } from './blogs/logging-interceptor.service';
import { AuthInterceptorService } from './blogs/auth-interceptor.service';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { MyVoteComponent } from './UnitTesting/o7-spies/08-vote/my-vote.component';
import { UserComponent } from './IntegrationTesting/user/user.component';
import { UserDetailsComponent } from './IntegrationTesting/user-details/user-details.component';
import { IntegrationComponent } from './IntegrationTesting/integration/integration.component';

import { HomeComponent } from './IntegrationTesting/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { HostComponent } from './host.component';
import { BusComponent } from './bus/bus.component';
import { HeroesComponent } from './heroes/heroes.component';
// import { RouterTestingModule } from '@angular/router/testing';



@NgModule({
  declarations: [
    AppComponent,
    RxjsDemoComponent,
    RxjsHomeComponent,
    RxjsUserComponent,
    TdFormsComponent,
    LoginComponent,
    SignupComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
    WelcomeComponent,
    MyPipesComponent,
    ShortenPipe,
    FilterPipe,
    BlogsComponent,
    ReactiveFormsComponent,
    MyVoteComponent,
    UserComponent,
    UserDetailsComponent,
    IntegrationComponent,
    HomeComponent,
    PageNotFoundComponent,

    HostComponent,
     BusComponent,
     HeroesComponent
    // RouterTestingModule
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    // RouterTestingModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptorService ,multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService ,multi:true}
  ],
  bootstrap: [AppComponent]
})




export class AppModule { }






// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// // import { HttpModule } from '@angular/http';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
 
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }