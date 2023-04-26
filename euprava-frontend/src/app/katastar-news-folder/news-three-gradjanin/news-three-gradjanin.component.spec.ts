import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsThreeGradjaninComponent } from './news-three-gradjanin.component';

describe('NewsThreeGradjaninComponent', () => {
  let component: NewsThreeGradjaninComponent;
  let fixture: ComponentFixture<NewsThreeGradjaninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsThreeGradjaninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsThreeGradjaninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
