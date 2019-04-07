import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CitysComponent } from './citys/citys.component';

const routes: Routes = [
  //{ path: 'citys', component: CitysComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
