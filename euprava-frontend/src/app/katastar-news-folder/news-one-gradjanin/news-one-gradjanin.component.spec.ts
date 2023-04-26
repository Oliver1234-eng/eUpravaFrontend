import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOneGradjaninComponent } from './news-one-gradjanin.component';

describe('NewsOneGradjaninComponent', () => {
  let component: NewsOneGradjaninComponent;
  let fixture: ComponentFixture<NewsOneGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOneGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOneGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
