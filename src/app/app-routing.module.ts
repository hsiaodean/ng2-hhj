import { AboutComponent } from './hhj/about/about.component';
import { HomeComponent } from './hhj/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
