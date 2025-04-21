import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  @Input() thumbnail: string = '';
  @Input() title: string = '';
  @Input() channel: string = '';
  @Input() perfilImg: string = '';
  @Input() videoTime: string = '';
}
