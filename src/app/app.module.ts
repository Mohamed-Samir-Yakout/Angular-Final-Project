import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { GiftComponent } from './Components/gift/gift.component';
import { SendGiftComponent } from './Components/send-gift/send-gift.component';


@NgModule({
  declarations: [
    AppComponent,
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
    NotFoundComponent,
    GiftComponent,
    SendGiftComponent


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
