import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  valueSearched: string='';

  constructor() { }

  setValueSearched(restaurant: string):void{
    this.valueSearched=restaurant;

  }
  getValueSearched():String{
    return this.valueSearched;
  }
}
