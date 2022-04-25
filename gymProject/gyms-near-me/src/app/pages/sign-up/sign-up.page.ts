import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService, User } from 'src/app/apis/users.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
user: User= new User();

  constructor(private router: Router, private service: UsersService) { }
  goToHomePage(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  goToSignIn(){
    this.router.navigateByUrl('/login');
  }
  // onSubmit(data){//to submit the list i will post the data that i got to here
  onSubmit(form: NgForm){
 this.user = form.value;
 console.log(form.value);
 this.service.addNewUsers(this.user).subscribe(response =>{
 console.log(response);
 window.alert('you have successfully signed in');// to let the user know that they successfully signed in


 });
 }

  ngOnInit() {
  }

}
