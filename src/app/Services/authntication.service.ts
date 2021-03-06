import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../ViewModels/iusers';
import {tap} from 'rxjs/operators'
import { ElementSchemaRegistry } from '@angular/compiler';
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
  user=new Subject<User>();
  constructor(private http: HttpClient) {}

  signUp(email: String, password: String) {
    return this.http.post<AuthnResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClLvMuz0wAZ5PcYcnU9DfWaUXGJ_JsFFw',

      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
    .pipe(tap(resData=>{
      this.handleAuthntication(resData.email,resData.idToken, resData.localId, +resData.expiresIn);
       

    }))
    ;
  }
  private handleAuthntication(email:string,token:string,id:string,expiresData:number){
    const expireDate=new Date(new Date().getTime()+expiresData*1000);
     const user=new User(id,email,token,expireDate);
     this.user.next(user);
       
  }

  login(email: String, password: String){
     return this.http.post<AuthnResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClLvMuz0wAZ5PcYcnU9DfWaUXGJ_JsFFw',
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
    
    
    
    
    ).pipe(tap(resData=>{
      this.handleAuthntication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
       

    }))

  }
  logout(){
    this.user.next(null);
    localStorage.removeItem('authUser');
  }

  islogged():boolean{

    if(localStorage.getItem('authUser'))
    return true;

    else
    return false;


  }
}
