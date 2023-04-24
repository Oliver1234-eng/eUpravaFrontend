import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatastarNewsComponent } from './katastar-news.component';

describe('KatastarNewsComponent', () => {
  let component: KatastarNewsComponent;
  let fixture: ComponentFixture<KatastarNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatastarNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatastarNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
