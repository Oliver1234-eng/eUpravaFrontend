import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradjaninNotarIstorijaComponent } from './gradjanin-notar-istorija.component';

describe('GradjaninNotarIstorijaComponent', () => {
  let component: GradjaninNotarIstorijaComponent;
  let fixture: ComponentFixture<GradjaninNotarIstorijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradjaninNotarIstorijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradjaninNotarIstorijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
