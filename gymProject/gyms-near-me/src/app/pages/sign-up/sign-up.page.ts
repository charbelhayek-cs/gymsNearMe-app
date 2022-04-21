import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService, User } from 'src/app/apis/users.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
user: User= new User();
// users: [
// fullName: string,//this will take as parameter the input of the user from the front end
// username: string,
// password: string,
// email: string,
// location: string,
// phoneNumber: string];

  constructor(private router: Router, private service: UsersService) { }
  goToHomePage(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  goToSignIn(){
    this.router.navigateByUrl('/login');
  }
  onSubmit(data){//to submit the list i will post the data that i got to here
    this.service.addNewUsers(data).subscribe(result =>{
      console.log(result);
    });

  }
  // addAccount(){
  //   // console.log(this.username); just for debugging perpuses

  // }

  ngOnInit() {
  }

}
