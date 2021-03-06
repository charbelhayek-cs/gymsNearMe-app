import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
export class User{
fullName: string;
userName: string;
password: string;
verifyPassword: string;
email: string;
phoneNumber: string;
location: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url='http://localhost/back-end/';

  constructor(private http: HttpClient) { }
  getAllUsers(){
    this.http.get<[User]>(this.url+'getAccount.php');
  }
  addNewUsers(user: User){
    return this.http.post(this.url +'register.php', user);//i will post what i put inside the User class

  }
}
