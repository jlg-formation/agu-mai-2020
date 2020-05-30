import {
  async,
  ComponentFixture,
  TestBed,
  tick,
  fakeAsync,
} from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WidgetModule } from 'src/app/widget/widget.module';
import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ArticleService } from 'src/app/services/article.service';
import { ReactiveFormsModule } from '@angular/forms';

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
      imports: [
        RouterTestingModule.withRoutes(routes),
        WidgetModule,
        ReactiveFormsModule,
      ],
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
    const art = {
      name: 'Tournevis',
      price: 2.99,
      qty: 100,
    };
    component.f.setValue(art);
    component.submit();
    tick();
    expect(location.path()).toBe('/stock');
    // test if articles is really created.
    const articles = fixture.debugElement.injector.get(ArticleService).articles$
      .value;
    const article = articles.find((a) => a.name === art.name);
    expect(article).toBeTruthy();
  }));

  it('should not submit with invalid form', fakeAsync(() => {
    const art = {
      name: '',
      price: 2123123123.99,
      qty: 100,
    };

    component.f.setValue(art);

    const compiled = fixture.nativeElement;
    fixture.detectChanges();
    const isDisabled = compiled.querySelector('button').disabled;

    expect(isDisabled).toBeTrue();
  }));
});
