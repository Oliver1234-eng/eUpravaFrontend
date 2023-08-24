import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveraGradjaninaNotarComponent } from './provera-gradjanina-notar.component';

describe('ProveraGradjaninaNotarComponent', () => {
  let component: ProveraGradjaninaNotarComponent;
  let fixture: ComponentFixture<ProveraGradjaninaNotarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveraGradjaninaNotarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveraGradjaninaNotarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
