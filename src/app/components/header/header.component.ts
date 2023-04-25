import { DOCUMENT, Location } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Productos } from 'src/app/services/productos';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


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
  searchParam: string ='';

  form: FormGroup = new FormGroup({
    search: new FormControl(''),
  })

  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private location: Location,
    private router: Router,
    private formBuilder: FormBuilder,
  ){}

  ngOnInit(): void{
    this.form = this.formBuilder.group(
      {
        searchParam : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
      }
    );


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

  searchProducts(): void {
    this.router.navigate(['/home'], { queryParams: {search: this.searchParam} });
  }

 

}
