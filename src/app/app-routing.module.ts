import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AccountSettingsComponent } from './Components/account-settings/account-settings.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { MyOrderComponent } from './Components/my-order/my-order.component';
// import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';

const routes: Routes = [
  {path: 'Admin', component: AdminDashboardComponent},
  {path: 'Privacy', component: PrivacyComponent},
  {path: 'TermsAndConditions', component: TermsComponent},
  {path: 'About-Us', component: AboutUsComponent},
  {path: 'Home', component: AdminDashboardComponent},
  {path: 'Delivery', component: AdminDashboardComponent},
  {path: 'Dine-out', component: AdminDashboardComponent},
  {path: 'Gift-Meals', component: AdminDashboardComponent},
  {path: 'My-Orders', component: AdminDashboardComponent}, 
  {path: 'Account-Settings', component: AccountSettingsComponent},
  {path: 'My-Order', component: MyOrderComponent},
  {path: '**', component: NotFoundComponent},

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
