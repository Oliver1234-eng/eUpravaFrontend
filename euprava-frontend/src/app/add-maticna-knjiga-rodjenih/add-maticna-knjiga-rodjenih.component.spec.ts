import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaticnaKnjigaRodjenihComponent } from './add-maticna-knjiga-rodjenih.component';

describe('AddMaticnaKnjigaRodjenihComponent', () => {
  let component: AddMaticnaKnjigaRodjenihComponent;
  let fixture: ComponentFixture<AddMaticnaKnjigaRodjenihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaticnaKnjigaRodjenihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaticnaKnjigaRodjenihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
