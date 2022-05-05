import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService,Login} from 'src/app/apis/login.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

// import {Platform, NavController} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  lg: Login=new Login();

  constructor(private router: Router,
    private service: LoginService,
    private alertCtrl: AlertController
  ) { }

    // private navctrl: NavController,
    // private platform: Platform
  goToSignUp(){
    this.router.navigate(['/sign-up']);
  }
  goToHomePage(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  async presentAlert(s: string) {
    const alert = await this.alertCtrl.create({
      message: s,
      buttons: ['Dismiss']//this is a button to dismiss the message
    });
    alert.present();
  }
  onSubmit(form: NgForm) {
    this.lg = form.value;
      this.service.login(this.lg).subscribe(response => {

        if(response.toString() === 'User Name is required'){
          this.presentAlert(response.toString());
          form.reset();
        }
        else if(response.toString() === 'Password is required'){
          this.presentAlert(response.toString());
          form.reset();
        }
        else if(response.toString() === 'Incorrect Username or password'){
          this.presentAlert(response.toString());
          form.reset();
        }
        else{
          this.presentAlert('welcome back'+' '+ this.lg.username);
          form.reset();
          this.router.navigateByUrl('/tabs/tab1');
        }
      });
  }

  ngOnInit() {
  }

}
