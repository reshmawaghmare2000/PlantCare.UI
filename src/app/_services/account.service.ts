import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiUrl='https://localhost:7269/api/';
  private currentUserSource=new BehaviorSubject<User|null>(null);
  currentUser$=this.currentUserSource.asObservable();


  constructor(private http:HttpClient) { }
  register(model:any){
    return this.http.post(this.apiUrl+'account/register',model);
  }
  login(model:any){
    return this.http.post<User>(this.apiUrl+'account/login',model).pipe(
      map((response:User)=>{
        const user=response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    )
  }
}
