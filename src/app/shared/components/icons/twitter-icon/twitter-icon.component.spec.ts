import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterIconComponent } from './twitter-icon.component';

describe('TwitterIconComponent', () => {
  let component: TwitterIconComponent;
  let fixture: ComponentFixture<TwitterIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwitterIconComponent]
    });
    fixture = TestBed.createComponent(TwitterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
