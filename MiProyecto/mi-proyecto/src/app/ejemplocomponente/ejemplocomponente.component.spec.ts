import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplocomponenteComponent } from './ejemplocomponente.component';

describe('EjemplocomponenteComponent', () => {
  let component: EjemplocomponenteComponent;
  let fixture: ComponentFixture<EjemplocomponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplocomponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplocomponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
