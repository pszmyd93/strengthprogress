import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturatrComponent } from './miniaturatr.component';

describe('MiniaturatrComponent', () => {
  let component: MiniaturatrComponent;
  let fixture: ComponentFixture<MiniaturatrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniaturatrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturatrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
