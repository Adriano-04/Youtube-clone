import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideVideoCardComponent } from '../side-video-card/side-video-card.component';
import { SideBarModalComponent } from '../side-bar-modal/side-bar-modal.component';

@Component({
  selector: 'app-video-page',
  imports: [HeaderComponent,SideVideoCardComponent,SideBarModalComponent],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.css'
})
export class VideoPageComponent {
  MenuOpen = false;

  toggleMenu() {
    this.MenuOpen = !this.MenuOpen;
  }
}
