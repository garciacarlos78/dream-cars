import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './cars/car-list/car-list.component';
import { CarDetailsComponent } from './cars/car-details/car-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', component: CarListComponent},
  {path:'car/:id', component: CarDetailsComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
