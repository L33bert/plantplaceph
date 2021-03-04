import { CarouselComponent } from './carousel/carousel.component';
import { OnshopComponent } from './onshop/onshop.component';
import { PlantspotComponent } from './plantspot/plantspot.component';
import { GardeningComponent } from './gardening/gardening.component';
import { ConnectComponent } from './connect/connect.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  { path: 'plantplaceph', component: HomeComponent},
  { path: 'plant-place-store', component: OnshopComponent },
  { path: 'plants-gallery', component: PlantspotComponent },
  { path: 'home-gardening', component: GardeningComponent },
  { path: 'stay-connected', component: ConnectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
