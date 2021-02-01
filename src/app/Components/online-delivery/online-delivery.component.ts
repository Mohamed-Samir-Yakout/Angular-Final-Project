import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { TastyOffersService } from 'src/app/Services/tasty-offers.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';
import { Itasty } from 'src/app/ViewModels/itasty';

@Component({
  selector: 'app-online-delivery',
  templateUrl: './online-delivery.component.html',
  styleUrls: ['./online-delivery.component.css']
})
export class OnlineDeliveryComponent implements OnInit, OnChanges, OnDestroy {

  OffersList: Itasty[] = []
  filter: boolean;
  restLit: Iresturant[];
  subscription: Subscription;
  subsList: Subscription[];
  itemsCount: number = 17;
  noMoreLoad: boolean = true;


  constructor(private offers: TastyOffersService, private resDatea: ResturantDataService, private myRouter: Router) {
    this.filter = true;
  }


  ngOnInit(): void {
    this.OffersList = this.offers.getAllOffers();

    this.subscription = this.resDatea.getAllRest().subscribe(
      (res) => {
        console.log(res)
        this.restLit = res;
      },
      (err) => { console.log(err) }

    )

    //this.subsList.push(this.subscription)

  }

  viewMore(): number | boolean {
    if (this.itemsCount < this.restLit.length) {
      return this.itemsCount += 6
    }
    return this.noMoreLoad = false
  }

  restProfile(rid: string) {
    this.myRouter.navigate(['/resturants', rid])
    return this.resDatea.getRestById(rid).subscribe(
      (res) => {
        let restDetalis: Iresturant = res;
      }
    )
  }

  ngOnChanges() {


  }


  ngOnDestroy() {

    // for (let sub of this.subsList) {
    //   sub.unsubscribe()
    // }

  }

}
