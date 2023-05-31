import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazTerminaGradjaninComponent } from './prikaz-termina-gradjanin.component';

describe('PrikazTerminaGradjaninComponent', () => {
  let component: PrikazTerminaGradjaninComponent;
  let fixture: ComponentFixture<PrikazTerminaGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazTerminaGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazTerminaGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
