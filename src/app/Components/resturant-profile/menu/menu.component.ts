import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Imenu } from 'src/app/ViewModels/imenu';
import { Iorder } from 'src/app/ViewModels/iorder';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {

  menu: Imenu = { meal: '', price: 0, description: '' }

  repeat: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

  order: Iorder[] = []

  constructor(private restData: ResturantDataService, private shService: SharedService, private router: Router) { }
  ngDoCheck(): void {
    console.log(this.order)
    this.shService.setOrderList(this.order)
  }

  ngOnInit(): void {

    this.restData.getMenu().subscribe(
      (res) => {
        console.log(res)
        this.menu = res
      },
      (err) => {
        console.log(err)
      }
    )
  }

  addToCart(mealName: string, mealPrice: number) {
    this.order.push({ meal: mealName, price: mealPrice, quantity: 1 })
  }

  checkOut() {
    if (localStorage.getItem('authUser')) {
      this.router.navigateByUrl('/check-out')
    } else {
      alert('Please Login First')
    }

  }

}
