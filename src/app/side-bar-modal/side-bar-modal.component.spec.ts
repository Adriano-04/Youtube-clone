import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarModalComponent } from './side-bar-modal.component';

describe('SideBarModalComponent', () => {
  let component: SideBarModalComponent;
  let fixture: ComponentFixture<SideBarModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
