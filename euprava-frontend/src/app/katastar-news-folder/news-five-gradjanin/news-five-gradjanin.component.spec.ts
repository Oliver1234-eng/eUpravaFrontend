import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFiveGradjaninComponent } from './news-five-gradjanin.component';

describe('NewsFiveGradjaninComponent', () => {
  let component: NewsFiveGradjaninComponent;
  let fixture: ComponentFixture<NewsFiveGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFiveGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFiveGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
