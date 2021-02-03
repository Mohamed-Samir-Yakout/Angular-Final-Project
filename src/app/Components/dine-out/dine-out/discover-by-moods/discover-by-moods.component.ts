import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-discover-by-moods',
  templateUrl: './discover-by-moods.component.html',
  styleUrls: ['./discover-by-moods.component.css','../dine-out.component.css']
})
export class DiscoverByMoodsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  restaurantByMood(moodDetails:string){
    this.router.navigate(['/DineOut/RestaurantMood',moodDetails]);



  
  }

}


