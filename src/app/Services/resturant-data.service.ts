import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
}
