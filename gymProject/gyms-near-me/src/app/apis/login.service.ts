import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export class Login{
  username: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url='http://localhost/back-end/';
  constructor(private http: HttpClient) { }
  login(login: Login){
    return this.http.post(this.url +'getUsers.php', login);//i will post to the php so that i can compare there and return the object

  }
}
