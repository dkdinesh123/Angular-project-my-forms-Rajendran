import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-my-pipes',
  templateUrl: './my-pipes.component.html',
  styleUrls: ['./my-pipes.component.css']
})
export class MyPipesComponent implements OnInit {

appStatus = new Promise((resolve,reject)=>{
setTimeout(()=>{
  resolve('stable');
},3000);

});
  filterText='';
  servers = [
    {instanceType: 'Medium', name:'local server', status:'stable', started:new Date()},
    {instanceType: 'Large', name: 'database server', status:'offline', started:new Date()},
    {instanceType: 'Small', name: 'sql server', status:'online', started:new Date()},
    {instanceType: 'Small', name: 'testing server', status:'offline', started:new Date()},
  ];

  constructor() { }

  ngOnInit(): void 
  {

  }

  getStatusClasses(status:string){
  return {
    'list-group-item-success':  status ==='stable',
    'list-group-item-primary': status ==='offline',
    'list-group-item-warning': status ==='online'
  }
}

onAddServer()
{
  this.servers.push({
    instanceType: 'small',
    name: 'Cloud Server',
    status: 'stable',
    started: new Date()
  });
}


}

