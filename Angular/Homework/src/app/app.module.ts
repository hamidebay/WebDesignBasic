import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';
import { CitysComponent } from './citys/citys.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { PictureComponent } from './picture/picture.component';

@NgModule({
  declarations: [
    AppComponent,
    CitysComponent,
    CityDetailsComponent,
    PictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})


export class AppModule { 
  
}

