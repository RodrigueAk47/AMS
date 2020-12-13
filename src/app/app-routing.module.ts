import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ParametreComponent } from './parametre/parametre.component';


const routes: Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'parametre', component: ParametreComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
