import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AccueilComponent } from './client/accueil/accueil.component';



const routes: Routes = [
  {path: '', component: AccueilComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
