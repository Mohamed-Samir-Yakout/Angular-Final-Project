import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { TermsComponent } from './Components/terms/terms.component';
import { PrivacyComponent } from './Components/privacy/privacy.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AccountSettingsComponent } from './Components/account-settings/account-settings.component';
import { MyOrderComponent } from './Components/my-order/my-order.component';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OnlineDeliveryComponent } from './Components/online-delivery/online-delivery.component';
import { ResturantProfileComponent } from './Components/resturant-profile/resturant-profile.component';
import { AboutComponent } from './Components/resturant-profile/about/about.component';
import { MenuComponent } from './Components/resturant-profile/menu/menu.component';
import { BranchesComponent } from './Components/resturant-profile/branches/branches.component';
import { ReviewsComponent } from './Components/resturant-profile/reviews/reviews.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { ChangeEmailComponent } from './Components/user-profile/change-email/change-email.component';
import { ChangePasswordComponent } from './Components/user-profile/change-password/change-password.component';
import { ChangeAddressComponent } from './Components/user-profile/change-address/change-address.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

>>>>>>> 379287d373b8b16163406d040993171957c2ba80

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    TermsComponent,
    PrivacyComponent,
    NotFoundComponent,
    AdminDashboardComponent,
    AccountSettingsComponent,
    MyOrderComponent
=======
    OnlineDeliveryComponent,
    ResturantProfileComponent,
    AboutComponent,
    MenuComponent,
    BranchesComponent,
    ReviewsComponent,
    UserProfileComponent,
    ChangeEmailComponent,
    ChangePasswordComponent,
    ChangeAddressComponent,
    NotFoundComponent

>>>>>>> 379287d373b8b16163406d040993171957c2ba80
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
