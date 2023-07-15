import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailConcoursComponent } from './detail-concours.component';

describe('DetailConcoursComponent', () => {
  let component: DetailConcoursComponent;
  let fixture: ComponentFixture<DetailConcoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailConcoursComponent]
    });
    fixture = TestBed.createComponent(DetailConcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
