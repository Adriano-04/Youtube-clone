import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { VideoListComponent } from './video-list/video-list.component';
import { AsideComponent } from './aside/aside.component';
import { SideBarModalComponent } from './side-bar-modal/side-bar-modal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,VideoListComponent,AsideComponent,SideBarModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube-clone';

  MenuOpen = false;

  toggleMenu() {
    this.MenuOpen = !this.MenuOpen;
  }
}
