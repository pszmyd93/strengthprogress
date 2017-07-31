import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelPlanyComponent } from './panel-plany.component';

describe('PanelPlanyComponent', () => {
  let component: PanelPlanyComponent;
  let fixture: ComponentFixture<PanelPlanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelPlanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelPlanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
