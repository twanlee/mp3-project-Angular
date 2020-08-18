import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLikeSongComponent } from './top-like-song.component';

describe('TopLikeSongComponent', () => {
  let component: TopLikeSongComponent;
  let fixture: ComponentFixture<TopLikeSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLikeSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLikeSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
