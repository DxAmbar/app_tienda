import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Productos } from 'src/app/services/productos';

@Component({
  selector: 'app-header', // ng-if-as
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Input() productos : Productos[] = [];
  
  isAuthenticated: boolean = false;
  currentRoute: string = '';
  route: string = '';

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private location: Location,
    private router: Router,
  ){}

  ngOnInit(): void{
    this.auth.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    })
  }

  login(): void {
    this.route = this.location.path();
    this.auth.loginWithRedirect({
      appState: { target: this.route}
    });
  }
  
  logout(): void {
    this.auth.logout();
  }

 

}
