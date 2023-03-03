import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiDefaultUrl: string = "http://localhost:8080/todo/";

  constructor(private http: HttpClient) { }

  getUser(clientUser:User) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      headers: httpHeaders,
    };
    return this.http.post(this.apiDefaultUrl + "login" , clientUser, requestOptions);
  }

  createAccount(user: User) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append("Content-Type", "application/json");
    const requestOptions = {
      headers: httpHeaders,
    };
    return this.http.post(this.apiDefaultUrl + "user", user, requestOptions);
  }
}
