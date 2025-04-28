import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideoPageComponent } from './video-page/video-page.component';

export const routes: Routes = [
{
  path: 'home', component: HomeComponent
},
{
  path: 'videoPage', component: VideoPageComponent
},
{
  path: '', redirectTo: '/home', pathMatch: 'full'
}
];
