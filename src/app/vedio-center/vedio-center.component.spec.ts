import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioCenterComponent } from './vedio-center.component';

describe('VedioCenterComponent', () => {
  let component: VedioCenterComponent;
  let fixture: ComponentFixture<VedioCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
