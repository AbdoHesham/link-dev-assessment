import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramIconComponent } from './instagram-icon.component';

describe('InstagramIconComponent', () => {
  let component: InstagramIconComponent;
  let fixture: ComponentFixture<InstagramIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramIconComponent]
    });
    fixture = TestBed.createComponent(InstagramIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
