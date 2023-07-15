import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListConcoursComponent } from './list-concours/list-concours.component';
import { OneConcoursComponent } from './one-concours/one-concours.component';
import { DetailConcoursComponent } from './detail-concours/detail-concours.component';

const routes: Routes = [
  { path: 'concours/:id', component: DetailConcoursComponent },
  { path: 'concours', component: ListConcoursComponent },
  { path: '', component: AccueilComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
