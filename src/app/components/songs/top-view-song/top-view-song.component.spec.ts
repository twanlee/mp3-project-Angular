import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopViewSongComponent } from './top-view-song.component';

describe('TopViewSongComponent', () => {
  let component: TopViewSongComponent;
  let fixture: ComponentFixture<TopViewSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopViewSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopViewSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
