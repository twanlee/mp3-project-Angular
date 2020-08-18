import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewPlaylistComponent } from './top-view-playlist.component';

describe('TopViewPlaylistComponent', () => {
  let component: TopViewPlaylistComponent;
  let fixture: ComponentFixture<TopViewPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopViewPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
