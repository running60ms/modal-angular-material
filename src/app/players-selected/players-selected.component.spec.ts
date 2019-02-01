import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersSelectedComponent } from './players-selected.component';

describe('PlayersSelectedComponent', () => {
  let component: PlayersSelectedComponent;
  let fixture: ComponentFixture<PlayersSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
