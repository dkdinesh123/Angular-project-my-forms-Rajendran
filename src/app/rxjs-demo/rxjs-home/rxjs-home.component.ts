import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs-home',
  templateUrl: './rxjs-home.component.html',
  styleUrls: ['./rxjs-home.component.css']
})
export class RxjsHomeComponent implements OnInit,OnDestroy {

  private mySubscription!: Subscription;


  constructor( ) { }

  ngOnInit(): void {
    // this.mySubscription = interval(1000).subscribe(count=>{
    //   console.log(count);
    // });
console.log('create custom Interval using observable instance');
const customInterval = new Observable((observer:Observer<any>)=>{
      let count = 5;
      setInterval(()=>{
        observer.next(count);
        if(count === 19)
        {
          observer.complete();
        }
        if(count == 17)
        {
          observer.error(new Error('count is greater than 15'))
        }
        count=count+2;
      },1000);
    });

    this.mySubscription = customInterval.pipe(
      filter(data => {
        return data>5;
      }),
      map((data:number) => {
        return 'Even Numbers :: '+(data+1)
      })
      ).subscribe(
        (response) => {
          console.log(response);
        },
        (error)=>
        {
          console.log('Error:'+error.message);
        },
        () =>
        {
          console.log('Status Completed');
        }
      );

    // this.mySubscription = customInterval.subscribe(
    //   (data) => {
    //     console.log(data);
    //   },
    //   (error)=>
    //   {
    //     console.log("Subscription was not completed...");
    //     console.log(error);
    //   },
    //   () =>
    //   {
    //     console.log('Subscription has been Completed!')
    //   }
    // );

  }


  ngOnDestroy(): void {
      this.mySubscription.unsubscribe();
  }

}
