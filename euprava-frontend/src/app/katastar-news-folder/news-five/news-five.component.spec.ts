import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFiveComponent } from './news-five.component';

describe('NewsFiveComponent', () => {
  let component: NewsFiveComponent;
  let fixture: ComponentFixture<NewsFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
