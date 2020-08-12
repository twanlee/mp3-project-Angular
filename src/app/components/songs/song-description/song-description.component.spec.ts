import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongDescriptionComponent } from './song-description.component';

describe('SongDescriptionComponent', () => {
  let component: SongDescriptionComponent;
  let fixture: ComponentFixture<SongDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
