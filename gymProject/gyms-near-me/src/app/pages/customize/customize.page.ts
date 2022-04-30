import { Component, OnInit } from '@angular/core';
import { CustomizeService, Plan } from 'src/app/apis/customize.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-customize',
  templateUrl: './customize.page.html',
  styleUrls: ['./customize.page.scss'],
})
export class CustomizePage implements OnInit {

  plan: Plan= new Plan();// to initialize the class we need to insert this constructor
  constructor(private service: CustomizeService, private router: Router, private alertCtrl: AlertController) { }
//controlling the alerts method
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      message: 'plan successfully added',
      buttons: ['Dismiss']//this is a button to dismiss the message
    });
    alert.present();
  }

  onSubmit(form: NgForm) {
    this.plan = form.value;
    console.log(form.value);

      this.service.addPlan(this.plan).subscribe(response => {
        console.log(response);
        this.presentAlert();
        form.reset();
        this.router.navigateByUrl('/tabs/tab3');// to let the user go to the sign in page so that they can sign in their registered account
      });
    }


  ngOnInit() {
  }

}
