import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSongFormComponent } from './search-song-form.component';

describe('SearchSongFormComponent', () => {
  let component: SearchSongFormComponent;
  let fixture: ComponentFixture<SearchSongFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSongFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
