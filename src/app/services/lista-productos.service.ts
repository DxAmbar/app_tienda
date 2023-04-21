import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  private urlEndPoint: string = 'http://localhost:8088/api/v1/products'

  private httpHeaders = new HttpHeaders({'content-type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getProductos(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint).pipe(
      catchError(e => {
        this.router.navigate([`/lista-productos`]);
        console.error(e.error.mensaje);
        return throwError( () => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
    
  }
}
