import { Component } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { WidgetModule } from './widget.module';

@Component({
  template: '<input type="text" appAutofocus>',
})
class TestComponent {}

describe('AutofocusDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [WidgetModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should instantiate the directive', () => {
    expect(component).toBeTruthy();
  });

  it('should test that the element on focus is an input', () => {
    const compiled = fixture.nativeElement;
    const input = compiled.querySelector('input') as HTMLElement;
    expect(document.activeElement === input).toBeTrue();
  });
});
