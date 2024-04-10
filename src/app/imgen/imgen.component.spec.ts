import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgenComponent } from './imgen.component';

describe('ImgenComponent', () => {
  let component: ImgenComponent;
  let fixture: ComponentFixture<ImgenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImgenComponent]
    });
    fixture = TestBed.createComponent(ImgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
