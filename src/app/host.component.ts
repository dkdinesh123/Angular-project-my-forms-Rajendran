import { Component } from "@angular/core";

@Component({
    selector:'app-host',
    template:`   
    <p appHighlight="orange">First</p>
    <p appHighlight>Second</p>
    `
})
export class HostComponent
{

}