import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LuzernComponent } from './ch-city/luzern/luzern.component';
import { ZurichComponent } from './ch-city/zurich/zurich.component';
import { BernComponent } from './ch-city/bern/bern.component';
import { BaselComponent } from './ch-city/basel/basel.component';
import { DetailsComponent } from './ch-city/luzern/details/details.component';
import { PictureComponent } from './ch-city/luzern/picture/picture.component';

const routes: Routes = [{
  path: 'luzern', 
  component: LuzernComponent,
  children: [{ path: 'details', 
              component: DetailsComponent },
            { path: 'picture', 
              component: PictureComponent }]
},
{ path: 'zurich', component: ZurichComponent},
{ path: 'bern', component: BernComponent },
{ path: 'basel', component: BaselComponent, children: [{path: 'details', component: DetailsComponent}] },
{ path: '', component: PictureComponent }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
