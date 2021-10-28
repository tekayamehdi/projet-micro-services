import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LunettesComponent } from './lunettes.component';

describe('LunettesComponent', () => {
  let component: LunettesComponent;
  let fixture: ComponentFixture<LunettesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LunettesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LunettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
