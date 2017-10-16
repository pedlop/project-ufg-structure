import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisadorComponent } from './pesquisador.component';

describe('PesquisadorComponent', () => {
  let component: PesquisadorComponent;
  let fixture: ComponentFixture<PesquisadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
