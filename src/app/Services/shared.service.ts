import { Injectable } from '@angular/core';
import { User } from '../ViewModels/iusers';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  valueSearched: string='';
  loggedInUser:User;

  constructor() { }

  setValueSearched(restaurant: string):void{
    this.valueSearched=restaurant;

  }
  getValueSearched():String{
    return this.valueSearched;
  }
  setLoggedInUser(user:User):void{
    this.loggedInUser=user;
  }
  getLoggedInUser():User{

    return this.loggedInUser;


  }
}
