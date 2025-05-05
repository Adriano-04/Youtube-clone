import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideVideoCardComponent } from './side-video-card.component';

describe('SideVideoCardComponent', () => {
  let component: SideVideoCardComponent;
  let fixture: ComponentFixture<SideVideoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideVideoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideVideoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
