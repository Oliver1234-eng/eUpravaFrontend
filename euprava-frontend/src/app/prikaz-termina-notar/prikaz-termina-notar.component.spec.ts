import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazTerminaNotarComponent } from './prikaz-termina-notar.component';

describe('PrikazTerminaNotarComponent', () => {
  let component: PrikazTerminaNotarComponent;
  let fixture: ComponentFixture<PrikazTerminaNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazTerminaNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazTerminaNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
