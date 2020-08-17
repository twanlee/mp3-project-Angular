import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSongsAndPlaylistComponent } from './user-songs-and-playlist.component';

describe('UserSongsAndPlaylistComponent', () => {
  let component: UserSongsAndPlaylistComponent;
  let fixture: ComponentFixture<UserSongsAndPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSongsAndPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSongsAndPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
