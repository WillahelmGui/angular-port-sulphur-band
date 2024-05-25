import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSongDisplayComponent } from './latest-song-display.component';

describe('LatestSongDisplayComponent', () => {
  let component: LatestSongDisplayComponent;
  let fixture: ComponentFixture<LatestSongDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestSongDisplayComponent]
    });
    fixture = TestBed.createComponent(LatestSongDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 