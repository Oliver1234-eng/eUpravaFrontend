import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradjaninMaticarComponent } from './gradjanin-maticar.component';

describe('GradjaninMaticarComponent', () => {
  let component: GradjaninMaticarComponent;
  let fixture: ComponentFixture<GradjaninMaticarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradjaninMaticarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradjaninMaticarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
