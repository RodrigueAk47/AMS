import { AuthGuardService } from './services/auth-guard.service';
import { AuthentificationService } from './services/authentification.service';
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
import { ContactComponent } from './client/contact/contact.component';
import { SageComptabiliteComponent } from './client/telechargement/sage-comptabilite/sage-comptabilite.component';
import { SageGestionCommercialeComponent } from './client/telechargement/sage-gestion-commerciale/sage-gestion-commerciale.component';
import { SagePaieComponent } from './client/telechargement/sage-paie/sage-paie.component';
import { FormationSageComptabiliteComponent } from './client/formation/formation-sage-comptabilite/formation-sage-comptabilite.component';
import { CodeComponent } from './client/formation/formation-sage-comptabilite/backend/code/code.component';
import { ErreurComponent } from './client/erreur/erreur.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PhotoshopComponent } from './client/telechargement/adobe/photoshop/photoshop.component';
import { PremiereproComponent } from './client/telechargement/adobe/premierepro/premierepro.component';
import { AcrobatComponent } from './client/telechargement/adobe/acrobat/acrobat.component';
import { AnimateComponent } from './client/telechargement/adobe/animate/animate.component';
import { AdobeComponent } from './client/telechargement/categories/adobe/adobe.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HttpClientModule} from '@angular/common/http';
import { Categorie1Component } from './client/formation/formation-sage-comptabilite/categorie1/categorie1.component';
import { Categorie2Component } from './client/formation/formation-sage-comptabilite/categorie2/categorie2.component';
import { Categorie3Component } from './client/formation/formation-sage-comptabilite/categorie3/categorie3.component';
import { Categorie4Component } from './client/formation/formation-sage-comptabilite/categorie4/categorie4.component';
import { Categorie5Component } from './client/formation/formation-sage-comptabilite/categorie5/categorie5.component';
import { Categorie6Component } from './client/formation/formation-sage-comptabilite/categorie6/categorie6.component';
import { Categorie7Component } from './client/formation/formation-sage-comptabilite/categorie7/categorie7.component';
import { Categorie8Component } from './client/formation/formation-sage-comptabilite/categorie8/categorie8.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    TelechargementComponent,
    FormationComponent,
    ParametreComponent,
    ContactComponent,
    SageComptabiliteComponent,
    SageGestionCommercialeComponent,
    SagePaieComponent,
    FormationSageComptabiliteComponent,
    CodeComponent,
    ErreurComponent,
    PhotoshopComponent,
    PremiereproComponent,
    AcrobatComponent,
    AnimateComponent,
    AdobeComponent,
    SignupComponent,
    SigninComponent,
    Categorie1Component,
    Categorie2Component,
    Categorie3Component,
    Categorie4Component,
    Categorie5Component,
    Categorie6Component,
    Categorie7Component,
    Categorie8Component,



  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    CookieService,
    AuthentificationService,
    AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
