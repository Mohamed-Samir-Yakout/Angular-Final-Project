import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idish } from '../ViewModels/idishe';
import { Imenu } from '../ViewModels/imenu';
import { Imood } from '../ViewModels/imood';
import { Iresturant } from '../ViewModels/iresturant';

@Injectable({
  providedIn: 'root'
})
export class ResturantDataService {

  constructor(private http: HttpClient) { }

  getAllRest(): Observable<Iresturant[]> {
    if(localStorage.getItem("language")=='ar')
    return this.http.get<Iresturant[]>(`${environment.arabic_Api_URL}/resturants`)
    if(localStorage.getItem("language")=='en')
    return this.http.get<Iresturant[]>(`${environment.english_Api_URL}/resturants`)
  }

  getRestById(rid: string): Observable<Iresturant> {
    if(localStorage.getItem("language")=='ar')
    return this.http.get<Iresturant>(`${environment.arabic_Api_URL}/resturants/${rid}`)
    if(localStorage.getItem("language")=='en')
    return this.http.get<Iresturant>(`${environment.english_Api_URL}/resturants/${rid}`)
  }


  getMenu(): Observable<Imenu> {
    if(localStorage.getItem("language")=='ar')
    return this.http.get<Imenu>(`${environment.arabic_Api_URL}/menu`)
    if(localStorage.getItem("language")=='en')
    return this.http.get<Imenu>(`${environment.english_Api_URL}/menu`)

  }
  getHiddenGemsRestaurants(): Observable<Iresturant[]> {
    // if(localStorage.getItem("language")=='ar')
    return this.http.get<Iresturant[]>(`${environment.arabic_Api_URL}/resturants?Mood=Hidden Gems`)
    // if(localStorage.getItem("language")=='en')
    // return this.http.get<Iresturant[]>(`${environment.english_Api_URL}/resturants?Mood=اماكن خفيه`)
  }
  getRestaurantsByMoods(Mood:string): Observable<Iresturant[]> {
    if(localStorage.getItem("language")=='ar')
    return this.http.get<Iresturant[]>(`${environment.arabic_Api_URL}/resturants?Mood=${Mood}`)
    if(localStorage.getItem("language")=='en')
    return this.http.get<Iresturant[]>(`${environment.english_Api_URL}/resturants?Mood=${Mood}`)

  }
  getRestaurantByDishs(Dish:string):Observable<Iresturant[]>{

    if(localStorage.getItem("language")=='ar')
    return this.http.get<Iresturant[]>(`${environment.arabic_Api_URL}/resturants?Dish=${Dish}`)
    if(localStorage.getItem("language")=='en')
    return this.http.get<Iresturant[]>(`${environment.english_Api_URL}/resturants?Dish=${Dish}`)
  }
  getDishesAvailable():Observable<Idish[]>{
    if(localStorage.getItem("language") =='ar')
    return  this.http.get<Idish[]>(`${environment.arabic_Api_URL}/Dishes`)
   if(localStorage.getItem("language") =='en')
    return this.http.get<Idish[]>(`${environment.english_Api_URL}/Dishes`)
  }

  getRestaurantByLocation(location:string):Observable<Iresturant[]>{

    if(localStorage.getItem("language") =='ar')   
    return this.http.get<Iresturant[]>(`${environment.arabic_Api_URL}/resturants?Location=${location}`)
    if(localStorage.getItem("language")=='en')
    
    return this.http.get<Iresturant[]>(`${environment.english_Api_URL}/resturants?Location=${location}`)
  }
   getMoods(): Observable<Imood[]>{
    if(localStorage.getItem("language") =='ar')
     return this.http.get<Imood[]>(`${environment.arabic_Api_URL}/moods`)
     if(localStorage.getItem("language") =='en')
     return this.http.get<Imood[]>(`${environment.english_Api_URL}/moods`)

   }
   

}
