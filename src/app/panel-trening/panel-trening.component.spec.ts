import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTreningComponent } from './panel-trening.component';

describe('PanelTreningComponent', () => {
  let component: PanelTreningComponent;
  let fixture: ComponentFixture<PanelTreningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelTreningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTreningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
