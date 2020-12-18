import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AccueilComponent } from './client/accueil/accueil.component';
import { TelechargementComponent } from './client/telechargement/telechargement.component';
import { FormationComponent } from './client/formation/formation.component';
import { ParametreComponent } from './client/parametre/parametre.component';
import { RegisterComponent } from './authentification/register/register.component';
import { LoginComponent } from './authentification/login/login.component';
import { ContactComponent } from './client/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TelechargementComponent,
    FormationComponent,
    ParametreComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
  


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
