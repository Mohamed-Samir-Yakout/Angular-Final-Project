import { Component, OnInit } from '@angular/core';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Imenu } from 'src/app/ViewModels/imenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Imenu = { meal: '', price: 0, description: '' }

  repeat: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

  constructor(private restData: ResturantDataService) { }

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

}
