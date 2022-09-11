import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchivementsAndCertificatesComponent } from './achivements-and-certificates.component';

describe('AchivementsAndCertificatesComponent', () => {
  let component: AchivementsAndCertificatesComponent;
  let fixture: ComponentFixture<AchivementsAndCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchivementsAndCertificatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchivementsAndCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
