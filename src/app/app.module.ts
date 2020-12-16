import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { TelechargementComponent } from './telechargement/telechargement.component';
import { FormationComponent } from './formation/formation.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ParametreComponent,
    TelechargementComponent,
    FormationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
