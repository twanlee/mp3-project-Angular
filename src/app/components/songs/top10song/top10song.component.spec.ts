import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10songComponent } from './top10song.component';

describe('Top10songComponent', () => {
  let component: Top10songComponent;
  let fixture: ComponentFixture<Top10songComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10songComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10songComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
