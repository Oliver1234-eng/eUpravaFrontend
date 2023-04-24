import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradjaninHomeComponent } from './gradjanin-home.component';

describe('GradjaninHomeComponent', () => {
  let component: GradjaninHomeComponent;
  let fixture: ComponentFixture<GradjaninHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradjaninHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradjaninHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
