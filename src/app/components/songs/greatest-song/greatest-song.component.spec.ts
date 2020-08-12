import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreatestSongComponent } from './greatest-song.component';

describe('GreatestSongComponent', () => {
  let component: GreatestSongComponent;
  let fixture: ComponentFixture<GreatestSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreatestSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreatestSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
