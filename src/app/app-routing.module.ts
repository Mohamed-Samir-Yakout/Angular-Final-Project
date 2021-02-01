import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OnlineDeliveryComponent } from './Components/online-delivery/online-delivery.component';
import { ResturantProfileComponent } from './Components/resturant-profile/resturant-profile.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';

const routes: Routes = [
  { path: 'delivery', component: OnlineDeliveryComponent },
  { path: 'resturants/:rid', component: ResturantProfileComponent },
  { path: 'settings', component: UserProfileComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
