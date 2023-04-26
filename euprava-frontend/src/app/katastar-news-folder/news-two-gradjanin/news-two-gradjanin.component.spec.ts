import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTwoGradjaninComponent } from './news-two-gradjanin.component';

describe('NewsTwoGradjaninComponent', () => {
  let component: NewsTwoGradjaninComponent;
  let fixture: ComponentFixture<NewsTwoGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsTwoGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsTwoGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
