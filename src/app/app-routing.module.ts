import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ParametreComponent } from './parametre/parametre.component';
import { TelechargementComponent } from './telechargement/telechargement.component';


const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: 'telechargement', component: TelechargementComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
