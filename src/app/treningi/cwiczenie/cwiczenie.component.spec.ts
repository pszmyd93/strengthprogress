import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CwiczenieComponent } from './cwiczenie.component';

describe('CwiczenieComponent', () => {
  let component: CwiczenieComponent;
  let fixture: ComponentFixture<CwiczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CwiczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CwiczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
