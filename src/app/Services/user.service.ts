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
    return this.http.get<Iusers[]>(`${environment.english_Api_URL}/users`)
  }


  getUserById(uid: number): Observable<Iusers> {
    return this.http.get<Iusers>(`${environment.english_Api_URL}/users/${uid}`)
  }

  updateUserData(uid: number, user: Iusers): Observable<any> {
    const HttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    };

    return this.http.put<any>(`${environment.english_Api_URL}/users/${uid}`, user, HttpOptions)
  }
}