import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { UploaderModule } from 'angular-uploader';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  //roviders: [provideRouter(routes)]
    providers: [
        importProvidersFrom(BrowserModule,  MatDialogModule, UploaderModule, HttpClientModule),
        provideAnimations(),
        provideRouter(routes),
        provideHttpClient()
    ]

};
