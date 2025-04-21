import { Component } from '@angular/core';
import { VideoCardComponent } from '../video-card/video-card.component';

@Component({
  selector: 'app-video-list',
  imports: [VideoCardComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.css'
})
export class VideoListComponent {

}
