import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideVideoCardComponent } from '../side-video-card/side-video-card.component';

@Component({
  selector: 'app-video-page',
  imports: [HeaderComponent,SideVideoCardComponent],
  templateUrl: './video-page.component.html',
  styleUrl: './video-page.component.css'
})
export class VideoPageComponent {

}
