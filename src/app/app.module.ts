import { AngularFireAuthModule } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from '@angular/fire';

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
import { SageComptabiliteComponent } from './client/telechargement/sage-comptabilite/sage-comptabilite.component';
import { SageGestionCommercialeComponent } from './client/telechargement/sage-gestion-commerciale/sage-gestion-commerciale.component';
import { SagePaieComponent } from './client/telechargement/sage-paie/sage-paie.component';
import { FormationSageComptabiliteComponent } from './client/formation/formation-sage-comptabilite/formation-sage-comptabilite.component';
import { CodeComponent } from './client/formation/formation-sage-comptabilite/backend/code/code.component';
import { ErreurComponent } from './client/erreur/erreur.component';
import { CookieService } from 'ngx-cookie-service';
import { BienvenueComponent } from './bienvenue/bienvenue.component';;
import { FormsModule} from '@angular/forms';
import { PhotoshopComponent } from './client/telechargement/adobe/photoshop/photoshop.component';


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
    SageComptabiliteComponent,
    SageGestionCommercialeComponent,
    SagePaieComponent,
    FormationSageComptabiliteComponent,
    CodeComponent,
    ErreurComponent,
    BienvenueComponent,
    PhotoshopComponent,



  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule,

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
