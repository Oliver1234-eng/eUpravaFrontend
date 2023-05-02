import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaBazePodatakaKatastraNepokretnostiComponent } from './pretraga-baze-podataka-katastra-nepokretnosti.component';

describe('PretragaBazePodatakaKatastraNepokretnostiComponent', () => {
  let component: PretragaBazePodatakaKatastraNepokretnostiComponent;
  let fixture: ComponentFixture<PretragaBazePodatakaKatastraNepokretnostiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaBazePodatakaKatastraNepokretnostiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaBazePodatakaKatastraNepokretnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
