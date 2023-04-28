import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazGodisnjihStatistikaKatastraComponent } from './prikaz-godisnjih-statistika-katastra.component';

describe('PrikazGodisnjihStatistikaKatastraComponent', () => {
  let component: PrikazGodisnjihStatistikaKatastraComponent;
  let fixture: ComponentFixture<PrikazGodisnjihStatistikaKatastraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazGodisnjihStatistikaKatastraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazGodisnjihStatistikaKatastraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
