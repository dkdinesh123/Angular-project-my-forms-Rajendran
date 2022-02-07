import { HttpClient, HttpHandler } from "@angular/common/http";
// import { Server } from "http";
import { EMPTY, from, of, throwError } from "rxjs";
import { TodoComponent } from "./todo.component"
import { Todo } from "./todo.model";
import { TodoService } from "./todo.service";

describe('Todo-Component:',()=>{
    let component:TodoComponent;
    let service:TodoService;
    beforeEach(()=>{
        const spy = jasmine.createSpyObj(
            'HttpClient',
            {post: of({}),get: of({}), delete: of({})
        });
        service = new TodoService(spy);
        component = new TodoComponent(service);
    });

    it('should create the todo instance',()=>{
        expect(component).toBeTruthy();
    });

  
    it('should call the server to save changes when new todo items is added',()=>{
        const todos: Todo[] = 
        [
            {
                id:333,
                activity:'Full Stack Development',
                targetDate:'30/Dec/2021', 
                status:'Virtual Mode'
            },
            {
                id:334,
                activity:'Full Stack Development',
                targetDate:'30/Dec/2021', 
                status:'Virtual Mode'
            },
            {
                id:335,
                activity:'Full Stack Development',
                targetDate:'30/Dec/2021', 
                status:'Virtual Mode'
            }
        ];
        spyOn(service,'getTodos').and.callFake(()=>{
            return from([todos]);
        })
        component.ngOnInit();
        expect(component.todos.length).toBe(3)
    });
    it('should call the server to save changes when new todo items is added',()=>{
        const todos: Todo[] = 
        [
            {
                id:333,
                activity:'Full Stack Development',
                targetDate:'30/Dec/2021', 
                status:'Virtual Mode'
            },
            {
                id:334,
                activity:'Full Stack Development',
                targetDate:'30/Dec/2021', 
                status:'Virtual Mode'
            },
            {
                id:335,
                activity:'Full Stack Development',
                targetDate:'30/Dec/2021', 
                status:'Virtual Mode'
            }
        ];
        spyOn(service,'getTodos').and.callFake(()=>{
            return from([todos]);
        })
        component.ngOnInit();
        expect(component.todos.length).toBe(3)
    });
    
    it('should call the server to save changed when a new todo items is added',()=>{
      const spy =   spyOn(service,'add').and.callFake(()=>{
            return EMPTY;
        });
        component.onAddTodo();
        expect(spy).toHaveBeenCalled();
    })
    
    it('should add the new to-do returned from the server.',()=>
    {
        const todo: Todo={id:240, 
            activity:'Project Meeting',
            targetDate:'1/jan/2022', 
            status:'Virtual Mode'
        };
        // spyOn(service,'add').and.callFake(()=>{
        //     return from([todo]);
        // });
        spyOn(service,'add').and.returnValue(from([todo]));
        component.onAddTodo();
        // expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
        expect(component.todos[0].id).toBe(240)
    })

    it('should set the message property if server returned an error',()=>{
        const errorMessage = 'Error From todo Server';
        spyOn(service,'add').and.returnValue(throwError(errorMessage));
        component.onAddTodo();
        expect(component.message).toBe(errorMessage);
    })


    it('Should call the server to delete a todo item if the user Confirms',()=>{
        const id = 456;
        spyOn(window,'confirm').and.returnValue(true);
        const spy = spyOn(service,'deleteTodo').and.returnValue(EMPTY);
        component.onDeleteTodo(id);
        expect(spy).toHaveBeenCalledWith(456);

    })
    
    it('should Not call the server to delete a todo item if the user has not called',()=>{
        const id = 465;
        spyOn(window,'confirm').and.returnValue(false);
        const spy = spyOn(service,'deleteTodo').and.returnValue(EMPTY);
        component.onDeleteTodo(id);
        expect(spy).not.toHaveBeenCalled();

    })

   


})