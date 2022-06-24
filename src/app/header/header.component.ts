import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
  private authListenerSubs!: Subscription;
  userIsAuthenticated = false;
  constructor() { }

  ngOnInit(): void {

  }
  isLoggedIn = false;
  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

}
