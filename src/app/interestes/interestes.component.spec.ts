import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestesComponent } from './interestes.component';

describe('InterestesComponent', () => {
  let component: InterestesComponent;
  let fixture: ComponentFixture<InterestesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
