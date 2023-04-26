import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFourGradjaninComponent } from './news-four-gradjanin.component';

describe('NewsFourGradjaninComponent', () => {
  let component: NewsFourGradjaninComponent;
  let fixture: ComponentFixture<NewsFourGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFourGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFourGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
