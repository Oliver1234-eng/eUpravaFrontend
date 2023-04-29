import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazGodisnjihStatistikaInfoCentraComponent } from './prikaz-godisnjih-statistika-info-centra.component';

describe('PrikazGodisnjihStatistikaInfoCentraComponent', () => {
  let component: PrikazGodisnjihStatistikaInfoCentraComponent;
  let fixture: ComponentFixture<PrikazGodisnjihStatistikaInfoCentraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazGodisnjihStatistikaInfoCentraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazGodisnjihStatistikaInfoCentraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
