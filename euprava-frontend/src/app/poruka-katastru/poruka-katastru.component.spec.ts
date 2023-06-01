import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorukaKatastruComponent } from './poruka-katastru.component';

describe('PorukaKatastruComponent', () => {
  let component: PorukaKatastruComponent;
  let fixture: ComponentFixture<PorukaKatastruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorukaKatastruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorukaKatastruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
