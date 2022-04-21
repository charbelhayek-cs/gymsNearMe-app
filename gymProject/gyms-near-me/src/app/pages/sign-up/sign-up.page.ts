import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
fullName: string; //this will take as parameter the input of the user from the front end
username: string;
password: string;
confirmPassword: string;
email: string;
location: string;
phoneNumber: string;

  constructor(private router: Router) { }
  goToHomePage(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  goToSignIn(){
    this.router.navigateByUrl('/login');
  }
  addAccount(){
    // console.log(this.username); just for debugging perpuses

  }

  ngOnInit() {
  }

}
