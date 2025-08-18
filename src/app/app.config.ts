import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { ROUTES } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authHttpInterceptorFn, provideAuth0 } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAuth0({
      ...environment.auth0,
      httpInterceptor: {
        allowedList: [
          `${environment.api.serverUrl}/api/messages/admin`,
          `${environment.api.serverUrl}/api/messages/protected`,
        ],
      },
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(ROUTES),
    provideHttpClient(withInterceptors([authHttpInterceptorFn])),
  ],
};
