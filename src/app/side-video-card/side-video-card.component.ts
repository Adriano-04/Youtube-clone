import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-video-card',
  imports: [],
  templateUrl: './side-video-card.component.html',
  styleUrl: './side-video-card.component.css'
})
export class SideVideoCardComponent {
  @Input() thumbnail: string = ''
  @Input() title: string = ''
  @Input() channel: string = ''
}
