import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';

@Component({
  selector: 'app-resturant-profile',
  templateUrl: './resturant-profile.component.html',
  styleUrls: ['./resturant-profile.component.css']
})
export class ResturantProfileComponent implements OnInit {
  @Input() restName: string;
  resturant: Iresturant = { id: '', Location: '', hotLine: 0, Branches: 0, Mood: "", img: "", mealImg: '' }
  aboutRest: boolean = false;
  restMenu: boolean = true;
  restBranches: boolean = false;
  restReviews: boolean = false;
  constructor(private restServ: ResturantDataService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        let restID = params.get('rid')
        console.log(restID)
        this.getResById(restID)
      }
    )
  }

  getResById(rid: string) {

    return this.restServ.getRestById(rid).subscribe(
      (res) => {
        this.resturant = res
      },
      (err) => {
        console.log(err)
      }
    )
  }

  showAbout(): boolean {
    return this.aboutRest = true, this.restMenu = false, this.restBranches = false, this.restReviews = false
  }

  showMenu(): boolean {
    return this.restMenu = true, this.aboutRest = false, this.restBranches = false, this.restReviews = false
  }

  showBranches(): boolean {
    return this.restBranches = true, this.aboutRest = false, this.restMenu = false, this.restReviews = false
  }

  showReviews(): boolean {
    return this.restReviews = true, this.restBranches = false, this.restBranches = false, this.aboutRest = false
  }

}
