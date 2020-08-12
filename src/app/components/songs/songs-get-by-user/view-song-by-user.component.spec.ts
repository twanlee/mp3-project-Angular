import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSongByUserComponent } from './view-song-by-user.component';

describe('ViewSongByUserComponent', () => {
  let component: ViewSongByUserComponent;
  let fixture: ComponentFixture<ViewSongByUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSongByUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSongByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
