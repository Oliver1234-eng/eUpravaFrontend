import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazUgovoraNotarComponent } from './prikaz-ugovora-notar.component';

describe('PrikazUgovoraNotarComponent', () => {
  let component: PrikazUgovoraNotarComponent;
  let fixture: ComponentFixture<PrikazUgovoraNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazUgovoraNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazUgovoraNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
