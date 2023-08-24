import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradjaninNotarZakazivanjeComponent } from './gradjanin-notar-zakazivanje.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
describe('GradjaninNotarZakazivanjeComponent', () => {
  let component: GradjaninNotarZakazivanjeComponent;
  let fixture: ComponentFixture<GradjaninNotarZakazivanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradjaninNotarZakazivanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradjaninNotarZakazivanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
