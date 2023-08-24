import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaticnaKnjigaUmrlihComponent } from './add-maticna-knjiga-umrlih.component';

describe('AddMaticnaKnjigaUmrlihComponent', () => {
  let component: AddMaticnaKnjigaUmrlihComponent;
  let fixture: ComponentFixture<AddMaticnaKnjigaUmrlihComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMaticnaKnjigaUmrlihComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaticnaKnjigaUmrlihComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
