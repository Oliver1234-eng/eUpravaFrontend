import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzuriranjePodatakaONepokretnostiComponent } from './azuriranje-podataka-o-nepokretnosti.component';

describe('AzuriranjePodatakaONepokretnostiComponent', () => {
  let component: AzuriranjePodatakaONepokretnostiComponent;
  let fixture: ComponentFixture<AzuriranjePodatakaONepokretnostiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzuriranjePodatakaONepokretnostiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzuriranjePodatakaONepokretnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
