import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private router: Router) { }
  goToHomePage(){
    this.router.navigateByUrl('/tabs/tab1');
  }
  goToSignIn(){
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}
