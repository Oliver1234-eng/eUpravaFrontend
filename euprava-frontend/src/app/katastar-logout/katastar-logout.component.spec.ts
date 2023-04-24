import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatastarLogoutComponent } from './katastar-logout.component';

describe('KatastarLogoutComponent', () => {
  let component: KatastarLogoutComponent;
  let fixture: ComponentFixture<KatastarLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatastarLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatastarLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
