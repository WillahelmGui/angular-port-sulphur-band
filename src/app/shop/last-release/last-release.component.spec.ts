import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastReleaseComponent } from './last-release.component';

describe('LastReleaseComponent', () => {
  let component: LastReleaseComponent;
  let fixture: ComponentFixture<LastReleaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LastReleaseComponent]
    });
    fixture = TestBed.createComponent(LastReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
