import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit, OnChanges {

  @Input() restID: string;
  resturant: Iresturant = { id: '', Location: '', hotLine: 0, Branches: 0 }
  repeat: number[] = [1, 2, 3, 4, 5, 6, 7]

  constructor(private restData: ResturantDataService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.restID)
    this.restData.getRestById(this.restID).subscribe(
      (res) => {
        console.log(res)
        this.resturant = res
      },
      (err) => {
        console.log(err)
      }
    )

  }

  ngOnInit(): void {


  }



}
