import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazGodisnjihStatistikaInfoCentraGradjaninComponent } from './prikaz-godisnjih-statistika-info-centra-gradjanin.component';

describe('PrikazGodisnjihStatistikaInfoCentraGradjaninComponent', () => {
  let component: PrikazGodisnjihStatistikaInfoCentraGradjaninComponent;
  let fixture: ComponentFixture<PrikazGodisnjihStatistikaInfoCentraGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazGodisnjihStatistikaInfoCentraGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazGodisnjihStatistikaInfoCentraGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
