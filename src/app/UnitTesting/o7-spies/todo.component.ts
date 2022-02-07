import { Component, OnInit } from "@angular/core";
import { Todo } from "./todo.model";
import { TodoService } from "./todo.service";

@Component({
    selector: 'app-todo',
    templateUrl:'./todo.component.html',
    styleUrls:['./todo.component.css']
})
export class TodoComponent implements OnInit
{
    todos:Todo[] =[];
    message: string = '';
   
    constructor(public service:TodoService)
    {

    }
    ngOnInit(): void {
        this.service.getTodos().subscribe(
            (data)=>{
                this.todos = data;
            }
        );
    }
    onAddTodo():void
    {
        const newTodo: Todo = {};
        this.service.add(newTodo).subscribe(
        res => this.todos.push(res),
        err => this.message = err 
        );
    }

    // onretrieveTodo(id:number):void
    // {
    //     if(confirm('Are You Sure You Want To retrieve TODO item..?'))
    //     {
    //         this.service.deleteTodo(id).subscribe();
    //     }
    // }
    onDeleteTodo(id:number):void
    {
        if(confirm('Are You Sure You Want To Delete TODO item..?'))
        {
            this.service.deleteTodo(id).subscribe();
        }
    }
}