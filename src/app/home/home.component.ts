import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { VideoListComponent } from '../video-list/video-list.component';
import { SideBarModalComponent } from '../side-bar-modal/side-bar-modal.component';
import { AsideComponent } from '../aside/aside.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent,VideoListComponent,AsideComponent,SideBarModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  MenuOpen = false;

  toggleMenu() {
    this.MenuOpen = !this.MenuOpen;
  }
}
