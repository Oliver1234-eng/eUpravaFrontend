import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatastarHomeComponent } from './katastar-home.component';

describe('KatastarHomeComponent', () => {
  let component: KatastarHomeComponent;
  let fixture: ComponentFixture<KatastarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatastarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatastarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
