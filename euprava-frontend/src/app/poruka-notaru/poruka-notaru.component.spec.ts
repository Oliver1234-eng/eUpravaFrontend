import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorukaNotaruComponent } from './poruka-notaru.component';

describe('PorukaNotaruComponent', () => {
  let component: PorukaNotaruComponent;
  let fixture: ComponentFixture<PorukaNotaruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorukaNotaruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorukaNotaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
