import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrendingComponent } from './top-trending.component';

describe('TopTrendingComponent', () => {
  let component: TopTrendingComponent;
  let fixture: ComponentFixture<TopTrendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTrendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
