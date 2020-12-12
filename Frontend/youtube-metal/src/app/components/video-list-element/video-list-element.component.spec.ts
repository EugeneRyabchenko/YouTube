import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoListElementComponent } from './video-list-element.component';

describe('VideoListElementComponent', () => {
  let component: VideoListElementComponent;
  let fixture: ComponentFixture<VideoListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
