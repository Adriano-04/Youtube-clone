import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoPageComponent } from "./video-page/video-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, VideoPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube-clone';

}
