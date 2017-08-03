import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTreningowyComponent } from './plan-treningowy.component';

describe('PlanTreningowyComponent', () => {
  let component: PlanTreningowyComponent;
  let fixture: ComponentFixture<PlanTreningowyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTreningowyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTreningowyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
