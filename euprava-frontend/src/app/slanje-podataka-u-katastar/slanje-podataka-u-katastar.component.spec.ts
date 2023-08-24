import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlanjePodatakaUKatastarComponent } from './slanje-podataka-u-katastar.component';

describe('SlanjePodatakaUKatastarComponent', () => {
  let component: SlanjePodatakaUKatastarComponent;
  let fixture: ComponentFixture<SlanjePodatakaUKatastarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlanjePodatakaUKatastarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlanjePodatakaUKatastarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
