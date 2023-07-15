import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneConcoursComponent } from './one-concours.component';

describe('OneConcoursComponent', () => {
  let component: OneConcoursComponent;
  let fixture: ComponentFixture<OneConcoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneConcoursComponent]
    });
    fixture = TestBed.createComponent(OneConcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
