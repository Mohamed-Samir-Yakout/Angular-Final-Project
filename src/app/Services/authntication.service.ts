import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
interface AuthnResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?:boolean;

}

@Injectable({
  providedIn: 'root',
})
export class AuthnticationService {
  constructor(private http: HttpClient) {}

  signUp(email: String, password: String) {
    return this.http.post<AuthnResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClLvMuz0wAZ5PcYcnU9DfWaUXGJ_JsFFw',

      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }

  login(email: String, password: String){
     return this.http.post<AuthnResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClLvMuz0wAZ5PcYcnU9DfWaUXGJ_JsFFw',
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
    
    
    
    
    )

  }
}
