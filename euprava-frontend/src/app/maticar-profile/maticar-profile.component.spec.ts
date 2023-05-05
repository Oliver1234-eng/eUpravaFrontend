import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaticarProfileComponent } from './maticar-profile.component';

describe('MaticarProfileComponent', () => {
  let component: MaticarProfileComponent;
  let fixture: ComponentFixture<MaticarProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaticarProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaticarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
