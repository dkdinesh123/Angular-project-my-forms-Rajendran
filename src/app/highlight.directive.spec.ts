import { Component, DebugElement, Directive } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HighlightDirective } from './highlight.directive';
import { HostComponent } from './host.component';

// @Directive({
//   selector:['appHighlight']
// })


describe('HighlightDirective',()=>{
  let fixture:ComponentFixture<HostComponent>;
  let de:DebugElement;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[
        HostComponent,
        HighlightDirective
      ]
    });
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  })
it('should create the highlight directive instance',()=>{
  de = fixture.debugElement.queryAll(By.css('p'))[0];
  let directive : HighlightDirective ;
  directive = de.injector.get(HighlightDirective);
  expect(directive).toBeTruthy();
})

it('should highlight the first element with orange',()=>{
  de = fixture.debugElement.queryAll(By.css('p'))[0];
  expect(de.nativeElement.style.backgroundColor).toBe('orange');
})

it('should highlight the second element with yellow',()=>{
  de = fixture.debugElement.queryAll(By.css('p'))[1];
  expect(de.nativeElement.style.backgroundColor).toBe('yellow');
})

// it('should highlight the second element with the default Color',()=>{
//   de = fixture.debugElement.queryAll(By.css('p'))[1];
//   let directive = de.injector.get(HighlightDirective);
//   expect(de.nativeElement.style.backgroundColor).toBe('directive.defaultColor');
// });


});
