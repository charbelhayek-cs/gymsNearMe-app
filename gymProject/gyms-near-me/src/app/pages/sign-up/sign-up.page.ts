import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService, User } from 'src/app/apis/users.service';
import {NgForm} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
user: User= new User();

  constructor(private router: Router, private service: UsersService, private alertCtrl: AlertController) { }
  goToHomePage(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  goToSignIn(){
    this.router.navigateByUrl('/login');
  }
  //controlling the alerts method
   async presentAlert() {
  const alert =await this.alertCtrl.create({
    message: 'passwords do not match, please try again',
    buttons: ['Dismiss']
  });
  alert.present();
}
  // onSubmit(data){//to submit the list i will post the data that i got to here
  onSubmit(form: NgForm){
 this.user = form.value;
 console.log(form.value);
if(this.user.password===this.user.verifyPassword){
 this.service.addNewUsers(this.user).subscribe(response =>{
 console.log(response);
 this.router.navigateByUrl('/login');// to let the user go to the sign in page so that they can sign in their registered account
 });
}
else{
  this.presentAlert();
}
}


  ngOnInit() {
  }

}
