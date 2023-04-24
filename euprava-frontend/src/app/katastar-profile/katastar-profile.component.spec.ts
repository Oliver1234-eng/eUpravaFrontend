import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatastarProfileComponent } from './katastar-profile.component';

describe('KatastarProfileComponent', () => {
  let component: KatastarProfileComponent;
  let fixture: ComponentFixture<KatastarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatastarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatastarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
