import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotarHomeComponent } from './notar-home.component';

describe('NotarHomeComponent', () => {
  let component: NotarHomeComponent;
  let fixture: ComponentFixture<NotarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
