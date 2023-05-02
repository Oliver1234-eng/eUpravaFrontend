import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent } from './pretraga-baze-podataka-katastra-nepokretnosti-gradjanin.component';

describe('PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent', () => {
  let component: PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent;
  let fixture: ComponentFixture<PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretragaBazePodatakaKatastraNepokretnostiGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
