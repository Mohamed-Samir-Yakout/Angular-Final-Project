import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthnticationService } from 'src/app/Services/authntication.service';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Iresturant } from 'src/app/ViewModels/iresturant';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  restaurantName: string;
  restaurantsList:Iresturant[];
  restaurantNameList:String[]=[]
  subscription: Subscription;
  isLoading:boolean;
  error:String=null;
  isAuthnticated:string=localStorage.getItem('authUser');
  expires:any;
 
  
  private userSub:Subscription;
  userEmail:string='';
  

  constructor(private mySharedService:SharedService,private router:Router,private resDatea: ResturantDataService,private authService :AuthnticationService) {
   
console.log(this.isAuthnticated)
console.log(this.expires)

  }
  ngOnDestroy(): void {
  
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
      (err) => {


         console.log(err);
           
        }

    )
     
  }
  navigateToRestaurantMatchesSearch():void{
   
    this.mySharedService.setValueSearched(this.restaurantName);
    if(localStorage.getItem("language")==='ar')
    this.router.navigate(['/DineOut/RestaurantLocation/القاهرة'])
    if(localStorage.getItem("language")==='en')
    this.router.navigate(['/DineOut/RestaurantLocation/Cairo'])
}
goToRestaurant(restaurant:String): void {
  this.router.navigate(['/resturants/',restaurant])
}
onSubmit(form:NgForm){
  const email=form.value.email;
  const  password=form.value.pwd;
  this.isLoading=true;
  this.authService.signUp(email,password).subscribe(
    
    resData=>{
      console.log(resData.email)
      this.isLoading=false;
      this.error=null;
    
    },
    err=>{console.log(err)
      this.isLoading=false;
      this.error=err.error.error.message;
    
    })


  form.reset();

}



onClickLogin(userlogin:NgForm){
  const email=userlogin.value.email;
  const  password=userlogin.value.pwd;
  this.isLoading=true;
  this.authService.login(email,password).subscribe(resData=>{
    this.isLoading=false;
    this.error=null;
     this.userEmail=resData.email;
     this.expires=resData.expiresIn
     window.location.reload();
    
  },
  err=>{console.log(err)
    this.isLoading=false;
    this.error=err.error.error.message;
  
  })
  userlogin.reset();


}
logOutForEmail(){
  this.authService.logout();

  window.location.reload();
}
}
