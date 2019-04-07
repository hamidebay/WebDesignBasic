import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CHCityComponent } from './ch-city/ch-city.component';
import { LuzernComponent } from './ch-city/luzern/luzern.component';
import { ZurichComponent } from './ch-city/zurich/zurich.component';
import { BaselComponent } from './ch-city/basel/basel.component';
import { BernComponent } from './ch-city/bern/bern.component';
import { DetailsComponent } from './ch-city/luzern/details/details.component';
//import { LuzernPictureComponent } from './ch-city/luzern-picture/luzern-picture.component';
import { PictureComponent } from './ch-city/luzern/picture/picture.component';
//import { BaselDetailsComponent } from './ch-city/basel-details/basel-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CHCityComponent,
    LuzernComponent,
    ZurichComponent,
    BaselComponent,
    BernComponent,
    DetailsComponent,
    //LuzernPictureComponent,
    PictureComponent,
    //BaselDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
