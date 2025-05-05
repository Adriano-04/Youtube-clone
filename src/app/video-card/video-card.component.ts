import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-video-card',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  @Input() mode: 'home' | 'sidebar' = 'home';
  @Input() thumbnail: string = '';
  @Input() title: string = '';
  @Input() channel: string = '';
  @Input() perfilImg: string = '';
  @Input() videoTime: string = '';
  @Input() views: string = '';
}
