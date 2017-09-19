import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriaComponent } from './seria.component';

describe('SeriaComponent', () => {
  let component: SeriaComponent;
  let fixture: ComponentFixture<SeriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
