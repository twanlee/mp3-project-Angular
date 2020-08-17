import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSongForPlaylistComponent } from './find-song-for-playlist.component';

describe('FindSongForPlaylistComponent', () => {
  let component: FindSongForPlaylistComponent;
  let fixture: ComponentFixture<FindSongForPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSongForPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSongForPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
