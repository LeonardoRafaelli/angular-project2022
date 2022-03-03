import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarAdmComponent } from './logar-adm.component';

describe('LogarAdmComponent', () => {
  let component: LogarAdmComponent;
  let fixture: ComponentFixture<LogarAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogarAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
