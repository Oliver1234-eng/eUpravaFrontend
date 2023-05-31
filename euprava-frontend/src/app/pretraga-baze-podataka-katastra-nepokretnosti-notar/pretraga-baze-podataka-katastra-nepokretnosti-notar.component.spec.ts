import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaBazePodatakaKatastraNepokretnostiNotarComponent } from './pretraga-baze-podataka-katastra-nepokretnosti-notar.component';

describe('PretragaBazePodatakaKatastraNepokretnostiNotarComponent', () => {
  let component: PretragaBazePodatakaKatastraNepokretnostiNotarComponent;
  let fixture: ComponentFixture<PretragaBazePodatakaKatastraNepokretnostiNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaBazePodatakaKatastraNepokretnostiNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaBazePodatakaKatastraNepokretnostiNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
