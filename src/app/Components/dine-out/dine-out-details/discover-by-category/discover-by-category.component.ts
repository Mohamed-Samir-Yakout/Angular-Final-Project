import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';
@Component({
  selector: 'app-discover-by-category',
  templateUrl: './discover-by-category.component.html',
  styleUrls: ['./discover-by-category.component.css'],
})
export class DiscoverByCategoryComponent implements OnInit {
  restaurantList: Iresturant[] = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private restaurants: ResturantDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((params: ParamMap) => {
      let sortByRestaurantMood = this.activatedRouter.snapshot.paramMap.get(
        'Mood'
      );
      let sortByRestaurantDish = this.activatedRouter.snapshot.paramMap.get(
        'Dish'
      );
      let sortByRestaurantLocation = this.activatedRouter.snapshot.paramMap.get(
        'Location'
      );
      if (sortByRestaurantMood) {
        this.restaurants.getRestaurantsByMoods(sortByRestaurantMood).subscribe(
          (response) => {
            this.restaurantList = response;
            console.log(this.restaurantList);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      if (sortByRestaurantDish) {
        this.restaurants.getRestaurantByDishs(sortByRestaurantDish).subscribe(
          (response) => {
            this.restaurantList = response;
            console.log(this.restaurantList);
          },
          (err) => {
            console.log(err);
          }
        );
      }
      if (sortByRestaurantLocation) {   
        this.restaurants
          .getRestaurantByLocation(sortByRestaurantLocation)
          .subscribe(
            (response) => {
              this.restaurantList = response;
              console.log(response);
              
            },
            (err) => {
              console.log(err);
            }
          );
      }
    });
  }
  navigateToRestaurant(restaurant: Iresturant) {
    this.router.navigate(['/resturants', restaurant.id]);
  }
}
