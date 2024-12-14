import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleStoreIconComponent } from './apple-store-icon.component';

describe('AppleStoreIconComponent', () => {
  let component: AppleStoreIconComponent;
  let fixture: ComponentFixture<AppleStoreIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppleStoreIconComponent]
    });
    fixture = TestBed.createComponent(AppleStoreIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
