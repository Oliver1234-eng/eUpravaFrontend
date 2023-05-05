import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotarProfileComponent } from './notar-profile.component';

describe('NotarProfileComponent', () => {
  let component: NotarProfileComponent;
  let fixture: ComponentFixture<NotarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
