import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { HomeAndLivingComponent } from './home-and-living/home-and-living.component';
import { MenComponent } from './men/men.component';




const routes: Routes = [
  
  {
    path: 'women',
    component: WomenComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'kids',
    component: KidsComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'home-and-living',
    component: HomeAndLivingComponent
  },
  
  {
    path: '',
    redirectTo: '/men',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/men',
    pathMatch: 'full'
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
