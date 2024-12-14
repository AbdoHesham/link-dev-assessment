import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePlayIconComponent } from './google-play-icon.component';

describe('GooglePlayIconComponent', () => {
  let component: GooglePlayIconComponent;
  let fixture: ComponentFixture<GooglePlayIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GooglePlayIconComponent]
    });
    fixture = TestBed.createComponent(GooglePlayIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
