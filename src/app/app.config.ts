import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { VideoCardComponent } from './video-card/video-card.component';
import { VideoListComponent } from './video-list/video-list.component';
import { AsideComponent } from './aside/aside.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),HeaderComponent,VideoCardComponent,VideoListComponent,AsideComponent],
};
