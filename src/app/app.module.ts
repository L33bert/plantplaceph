import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { OnshopComponent } from './onshop/onshop.component';
import { PlantspotComponent } from './plantspot/plantspot.component';
// import { DialogContent } from './plantspot/plantspot.component';
import { GardeningComponent } from './gardening/gardening.component';
import { ConnectComponent } from './connect/connect.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { PlantspotmodalComponent } from './plantspotmodal/plantspotmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    OnshopComponent,
    PlantspotComponent,
    GardeningComponent,
    ConnectComponent,
    FooterComponent,
    HomeComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, CarouselComponent, OnshopComponent, PlantspotComponent, GardeningComponent, ConnectComponent, FooterComponent, HomeComponent, ModalComponent],
  entryComponents: [PlantspotmodalComponent]
})
export class AppModule { }
