import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Todo } from "./todo.model";

@Injectable
({
    providedIn: 'root'
})

export class TodoService 
{
    constructor(public http:HttpClient)
    {

    }
    add(todo: Todo) : Observable<any>
    {
        return this.http.post('..',todo).pipe(map(res=> res));
    }
    
    getTodos():Observable<any>
    {

        return this.http.get<Todo>('..').pipe(map(res=>res));
    }
   
    deleteTodo(id:number):Observable<any>
    {
        return this.http.delete('..').pipe(map(res=>res));

    }

}