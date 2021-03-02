import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurantName: string;
  restaurantsList:Iresturant[];
  restaurantNameList:String[]=[]
  subscription: Subscription;

  constructor(private mySharedService:SharedService,private router:Router,private resDatea: ResturantDataService) {
   

   }

  ngOnInit(): void {
   
    this.restaurantName='';
    this.subscription = this.resDatea.getAllRest().subscribe(
      (res) => {
      this.restaurantsList=res;
      this.restaurantsList.forEach((val)=> {
        this.restaurantNameList.push(val.id);
        

      });

       
        
      },
      (err) => { console.log(err) }

    )
     
   
   
  }
  navigateToRestaurantMatchesSearch():void{
    this.mySharedService.setValueSearched(this.restaurantName);
    this.router.navigate(['/DineOut/RestaurantLocation/Cairo'])
}
goToRestaurant(restaurant:String): void {
  // console.log(restaurant)
  this.router.navigate(['/resturants/',restaurant])
}
}
