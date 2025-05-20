import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "angulardb-573c3", appId: "1:24007322387:web:f109471e20efda9428c8e6", storageBucket: "angulardb-573c3.firebasestorage.app", apiKey: "AIzaSyCB0sbMgizwGadmEscPtcVBbao6n3fLqhI", authDomain: "angulardb-573c3.firebaseapp.com", messagingSenderId: "24007322387" })), provideFirestore(() => getFirestore())]
};
