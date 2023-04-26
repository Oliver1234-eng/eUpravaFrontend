import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSixGradjaninComponent } from './news-six-gradjanin.component';

describe('NewsSixGradjaninComponent', () => {
  let component: NewsSixGradjaninComponent;
  let fixture: ComponentFixture<NewsSixGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSixGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSixGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
