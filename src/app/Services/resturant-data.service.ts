import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idish } from '../ViewModels/idishe';
import { Imenu } from '../ViewModels/imenu';
import { Iresturant } from '../ViewModels/iresturant';

@Injectable({
  providedIn: 'root'
})
export class ResturantDataService {

  constructor(private http: HttpClient) { }

  getAllRest(): Observable<Iresturant[]> {
    return this.http.get<Iresturant[]>(`${environment.base_URL}/resturants`)
  }

  getRestById(rid: string): Observable<Iresturant> {
    return this.http.get<Iresturant>(`${environment.base_URL}/resturants/${rid}`)
  }


  getMenu(): Observable<Imenu> {
    return this.http.get<Imenu>(`${environment.base_URL}/menu`)
  }
  getHiddenGemsRestaurants(): Observable<Iresturant[]> {


    return this.http.get<Iresturant[]>(`${environment.base_URL}/resturants?Mood=Hidden Gems`)
  }
  getRestaurantsByMoods(Mood:string): Observable<Iresturant[]> {


    return this.http.get<Iresturant[]>(`${environment.base_URL}/resturants?Mood=${Mood}`)

  }
  getRestaurantByDishs(Dish:string):Observable<Iresturant[]>{


    return this.http.get<Iresturant[]>(`${environment.base_URL}/resturants?Dish=${Dish}`)
  }
  getDishesAvailable():Observable<Idish[]>{
    return  this.http.get<Idish[]>(`${environment.base_URL}/Dishes`)
  }

  getRestaurantByLocation(location:string):Observable<Iresturant[]>{


    return this.http.get<Iresturant[]>(`${environment.base_URL}/resturants?Location=${location}`)
  }
}
