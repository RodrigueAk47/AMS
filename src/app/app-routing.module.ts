import { SigninComponent } from './auth/signin/signin.component';
import { AdobeComponent } from './client/telechargement/categories/adobe/adobe.component';
import { AnimateComponent } from './client/telechargement/adobe/animate/animate.component';
import { AcrobatComponent } from './client/telechargement/adobe/acrobat/acrobat.component';
import { PremiereproComponent } from './client/telechargement/adobe/premierepro/premierepro.component';
import { PhotoshopComponent } from './client/telechargement/adobe/photoshop/photoshop.component';

import { ErreurComponent } from './client/erreur/erreur.component';
import { FormationSageComptabiliteComponent } from './client/formation/formation-sage-comptabilite/formation-sage-comptabilite.component';
import { FormationComponent } from './client/formation/formation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy} from '@angular/router';

import { AccueilComponent } from './client/accueil/accueil.component';
import { ContactComponent } from './client/contact/contact.component';
import { ParametreComponent } from './client/parametre/parametre.component';
import { SageComptabiliteComponent } from './client/telechargement/sage-comptabilite/sage-comptabilite.component';
import { SageGestionCommercialeComponent } from './client/telechargement/sage-gestion-commerciale/sage-gestion-commerciale.component';
import { SagePaieComponent } from './client/telechargement/sage-paie/sage-paie.component';
import { TelechargementComponent } from './client/telechargement/telechargement.component';
import { SignupComponent } from './auth/signup/signup.component';



const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: 'telechargement', component: TelechargementComponent},

  {path: 'contact', component: ContactComponent},

  {path: 'telechargement/sage-comptabilite', component: SageComptabiliteComponent},
  {path: 'telechargement/sage-gestion-commerciale', component: SageGestionCommercialeComponent},
  {path: 'telechargement/sage-paie', component: SagePaieComponent},
  {path: 'formation', component: FormationComponent},

  {path: 'formation/sage-comptabilite', component:FormationSageComptabiliteComponent},
  {path: 'telechargement/photoshop', component: PhotoshopComponent},
  {path: 'telechargement/premierepro', component: PremiereproComponent},
  {path: 'telechargement/acrobat', component: AcrobatComponent},
  {path: 'telechargement/animate', component: AnimateComponent},
  {path: 'telechargement/categories/adobe', component: AdobeComponent},
  {path: '**', component: ErreurComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
     {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
