import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradjaninNotarComponent } from './gradjanin-notar.component';

describe('GradjaninNotarComponent', () => {
  let component: GradjaninNotarComponent;
  let fixture: ComponentFixture<GradjaninNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradjaninNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradjaninNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
