import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { RegisterComponent } from './authentification/register/register.component';
import { AccueilComponent } from './client/accueil/accueil.component';
import { ContactComponent } from './client/contact/contact.component';
import { ParametreComponent } from './client/parametre/parametre.component';
import { SageComptabiliteComponent } from './client/telechargement/sage-comptabilite/sage-comptabilite.component';
import { SageGestionCommercialeComponent } from './client/telechargement/sage-gestion-commerciale/sage-gestion-commerciale.component';
import { SagePaieComponent } from './client/telechargement/sage-paie/sage-paie.component';
import { TelechargementComponent } from './client/telechargement/telechargement.component';



const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: 'telechargement', component: TelechargementComponent},
  {path: 'inscription', component: RegisterComponent},
  {path: 'a-propos', component: ContactComponent},
  {path: 'inscription', component: RegisterComponent},
  {path: 'telechargement/sage-comptabilite', component: SageComptabiliteComponent},
  {path: 'telechargement/sage-gestion-commerciale', component: SageGestionCommercialeComponent},
  {path: 'telechargement/sage-paie', component: SagePaieComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
