import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';
@Component({
  selector: 'app-discover-by-location',
  templateUrl: './discover-by-location.component.html',
  styleUrls: ['./discover-by-location.component.css','../dine-out.component.css']
})
export class DiscoverByLocationComponent implements OnInit {
  restaurantsByLocation:Iresturant[]=[];
  constructor(private router:Router,private allRestaurantFromApi: ResturantDataService) { }

  ngOnInit(): void {
    this.allRestaurantFromApi.getAllRest().subscribe(
      (response) => {

         this.restaurantsByLocation=response.slice(0,5);
         console.log(this.restaurantsByLocation)
       
      },

      (err) => {console.log(err)}


    )

  


  }
  getRestaurantsByLocation (location:string){
    this.router.navigate(['/DineOut/RestaurantLocation',location]);
    

  }
  navigateToRestaurant(restaurant:Iresturant){

    this.router.navigate(['/resturants',restaurant.id])
  }

}
