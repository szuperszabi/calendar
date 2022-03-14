import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarComponent } from './calendar.component';
import {AppComponent} from "../app.component";

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  // it(`should create siteObject'`, () => {
  //   const fixture = TestBed.createComponent(CalendarComponent);
  //   const calendar = fixture.componentInstance;
  //   expect(calendar.siteObject.year).toEqual('2022');
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});


