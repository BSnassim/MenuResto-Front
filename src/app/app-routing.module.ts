import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPlatComponent } from './add-plat/add-plat.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PlatComponent } from './plat/plat.component';

const routes: Routes = [
  {path:'home', component : HomeComponent},
  {path:'menu', component : MenuComponent},
  {path:'plat', component : PlatComponent},
  {path:'AddPlat', component : AddPlatComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
