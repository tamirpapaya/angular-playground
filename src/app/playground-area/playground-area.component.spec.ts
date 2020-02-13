import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundAreaComponent } from './playground-area.component';

describe('PlaygroundAreaComponent', () => {
  let component: PlaygroundAreaComponent;
  let fixture: ComponentFixture<PlaygroundAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
