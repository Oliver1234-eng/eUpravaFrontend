import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazGodisnjihStatistikaKatastraGradjaninComponent } from './prikaz-godisnjih-statistika-katastra-gradjanin.component';

describe('PrikazGodisnjihStatistikaKatastraGradjaninComponent', () => {
  let component: PrikazGodisnjihStatistikaKatastraGradjaninComponent;
  let fixture: ComponentFixture<PrikazGodisnjihStatistikaKatastraGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazGodisnjihStatistikaKatastraGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazGodisnjihStatistikaKatastraGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
