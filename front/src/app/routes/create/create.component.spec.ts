import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WidgetModule } from 'src/app/widget/widget.module';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-empty',
  template: '',
  styleUrls: [],
})
export class EmptyComponent {}

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  const routes: Routes = [{ path: 'stock', component: EmptyComponent }];

  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateComponent, EmptyComponent],
      imports: [RouterTestingModule.withRoutes(routes), WidgetModule],
    }).compileComponents();

    location = TestBed.inject(Location);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit with success', fakeAsync(() => {
    component.f.setValue({
      name: 'Tournevis',
      price: 2.99,
      qty: 100,
    });
    component.submit();
    tick();
    expect(location.path()).toBe('/stock');
  }));
});
