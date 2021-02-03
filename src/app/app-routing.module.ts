import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { AccountSettingsComponent } from './Components/account-settings/account-settings.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { MyOrderComponent } from './Components/my-order/my-order.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { TermsComponent } from './Components/terms/terms.component';
import { OnlineDeliveryComponent } from './Components/online-delivery/online-delivery.component';
import { ResturantProfileComponent } from './Components/resturant-profile/resturant-profile.component';

import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { GiftComponent } from './Components/gift/gift.component';
import { SendGiftComponent } from './Components/send-gift/send-gift.component';

const routes: Routes = [
  { path: 'Admin', component: AdminDashboardComponent },
  { path: 'Privacy', component: PrivacyComponent },
  { path: 'TermsAndConditions', component: TermsComponent },
  { path: 'About-Us', component: AboutUsComponent },
  { path: 'Home', component: AdminDashboardComponent },
  { path: 'Gift-Meals', component: AdminDashboardComponent },
  { path: 'My-Order', component: MyOrderComponent },
  { path: 'Account-Settings', component: AccountSettingsComponent },
  { path: 'delivery', component: OnlineDeliveryComponent },
  { path: 'resturants/:rid', component: ResturantProfileComponent },
  { path: 'settings', component: UserProfileComponent },
  { path: 'gift', component: GiftComponent },
  { path: 'sendGift', component: SendGiftComponent },
  { path: "DineOut", loadChildren: () => import('./Components/dine-out/dine-out.module').then(m => m.DineOutModule) },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
