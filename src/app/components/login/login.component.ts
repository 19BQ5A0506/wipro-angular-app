import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormsModule
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


//import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false;
  responsedata: any;
  private authStatusSub!: Subscription;
  subscription: any;
  emptyForm: string | undefined;
  isEmpty = false;
  isLoggedIn!: boolean;

  constructor(private router: Router) {}

  userRole = localStorage.getItem('role');

  ngOnInit() {

  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  Proceedlogin() {
    //console.log(this.loginForm.value);
    this.isLoggedIn = true;
    localStorage.setItem('user',this.loginForm.value.username!);

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

