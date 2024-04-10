import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedlistComponent } from './linkedlist.component';

describe('LinkedlistComponent', () => {
  let component: LinkedlistComponent;
  let fixture: ComponentFixture<LinkedlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedlistComponent]
    });
    fixture = TestBed.createComponent(LinkedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
