import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iusers } from '../ViewModels/iusers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<Iusers[]> {
    return this.http.get<Iusers[]>(`${environment.base_URL}/users`)
  }


  getUserById(uid: number): Observable<Iusers> {
    return this.http.get<Iusers>(`${environment.base_URL}/users/${uid}`)
  }

  changeEmail(uid: number, user: Iusers): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };

    return this.http.put<any>(`${environment.base_URL}/user/${uid}`, user, HttpOptions)
  }
}