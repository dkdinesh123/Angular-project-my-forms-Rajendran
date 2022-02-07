import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { MyVoteComponent } from "./my-vote.component"

describe('MyVoteComponent',()=>{
    let component:MyVoteComponent;

    let fixture:ComponentFixture<MyVoteComponent>;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[
                MyVoteComponent
            ],
            imports:[],
            providers:[],
        });
        fixture = TestBed.createComponent(MyVoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })
    it('Create the MyVoteComponent Instance.',()=>{
        expect(component).toBeTruthy();
    })
    it('should render total votes',()=>{
        component.otherVote = 17;
        component.myVote = 1;
        fixture.detectChanges();
        const de =fixture.debugElement.query(By.css('.vote-count'));
        const el:HTMLElement = de.nativeElement;
        expect(el.innerHTML).toContain('18');
    })
    it('Should highlight the upvote button if I have upvoted.',()=>{
        component.myVote = 1;
        fixture.detectChanges();
        const de = fixture.debugElement.query(By.css('.btn-outline-primary'));
        expect(de.classes['highlighted']).toBeTruthy();
    })
    it('should increase total votes when I checked the upvote button.' ,()=>{
        const btn = fixture.debugElement.query(By.css('.btn-outline-danger'));
        btn.triggerEventHandler('click',null);
        expect(component.totalVotes).toBe(-1);
    })
 
    it('Should highlight the downvote button if I have downvoted.',()=>{
        component.myVote = -1;
        fixture.detectChanges();
        const de = fixture.debugElement.query(By.css('.btn-outline-danger'));
        expect(de.classes['highlighted']).toBeTruthy();
    })
    it('should increase total votes when I checked the downvote button.' ,()=>{
        const btn = fixture.debugElement.query(By.css('.btn-outline-primary'));
        btn.triggerEventHandler('click',null);
        expect(component.totalVotes).toBeTruthy();
    })

})