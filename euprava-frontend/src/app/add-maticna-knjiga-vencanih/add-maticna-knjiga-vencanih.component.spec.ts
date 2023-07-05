import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaticnaKnjigaVencanihComponent } from './add-maticna-knjiga-vencanih.component';

describe('AddMaticnaKnjigaVencanihComponent', () => {
  let component: AddMaticnaKnjigaVencanihComponent;
  let fixture: ComponentFixture<AddMaticnaKnjigaVencanihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaticnaKnjigaVencanihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaticnaKnjigaVencanihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
