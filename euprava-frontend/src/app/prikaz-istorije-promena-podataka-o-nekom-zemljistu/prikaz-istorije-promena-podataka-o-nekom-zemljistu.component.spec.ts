import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazIstorijePromenaPodatakaONekomZemljistuComponent } from './prikaz-istorije-promena-podataka-o-nekom-zemljistu.component';

describe('PrikazIstorijePromenaPodatakaONekomZemljistuComponent', () => {
  let component: PrikazIstorijePromenaPodatakaONekomZemljistuComponent;
  let fixture: ComponentFixture<PrikazIstorijePromenaPodatakaONekomZemljistuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrikazIstorijePromenaPodatakaONekomZemljistuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazIstorijePromenaPodatakaONekomZemljistuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
