import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongSearchingResultsComponent } from './song-searching-results.component';

describe('SongSearchingResultsComponent', () => {
  let component: SongSearchingResultsComponent;
  let fixture: ComponentFixture<SongSearchingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongSearchingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongSearchingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
