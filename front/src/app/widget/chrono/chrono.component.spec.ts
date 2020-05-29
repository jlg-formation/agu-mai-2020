import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronoComponent } from './chrono.component';
import { RouterTestingModule } from '@angular/router/testing';
import { WidgetModule } from '../widget.module';

describe('ChronoComponent', () => {
  let component: ChronoComponent;
  let fixture: ComponentFixture<ChronoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChronoComponent],
      imports: [RouterTestingModule, WidgetModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
