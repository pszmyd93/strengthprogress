import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SzablonCwiczeniaComponent } from './szablon-cwiczenia.component';

describe('SzablonCwiczeniaComponent', () => {
  let component: SzablonCwiczeniaComponent;
  let fixture: ComponentFixture<SzablonCwiczeniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SzablonCwiczeniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SzablonCwiczeniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
