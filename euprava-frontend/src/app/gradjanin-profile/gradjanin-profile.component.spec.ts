import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradjaninProfileComponent } from './gradjanin-profile.component';

describe('GradjaninProfileComponent', () => {
  let component: GradjaninProfileComponent;
  let fixture: ComponentFixture<GradjaninProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradjaninProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradjaninProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
