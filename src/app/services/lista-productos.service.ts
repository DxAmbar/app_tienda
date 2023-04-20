import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  private urlEndPoint: string = 'http://localhost:8088/api/v1/products'

  private httpHeaders = new HttpHeaders({'content-type': 'application/json'})

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get<any>(this.urlEndPoint);
    
  }
}
