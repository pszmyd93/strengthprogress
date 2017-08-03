import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreningComponent } from './trening.component';

describe('TreningComponent', () => {
  let component: TreningComponent;
  let fixture: ComponentFixture<TreningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
