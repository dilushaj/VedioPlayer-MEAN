import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcFormComponent } from './clientc-form.component';

describe('ClientcFormComponent', () => {
  let component: ClientcFormComponent;
  let fixture: ComponentFixture<ClientcFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientcFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
