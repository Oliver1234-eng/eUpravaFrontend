import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaticarHomeComponent } from './maticar-home.component';

describe('MaticarHomeComponent', () => {
  let component: MaticarHomeComponent;
  let fixture: ComponentFixture<MaticarHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaticarHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaticarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
