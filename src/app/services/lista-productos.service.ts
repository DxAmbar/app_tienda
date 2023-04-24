import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, map, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Productos } from './productos';
import { CartItem } from './cartItem';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class ListaProductosService {

  private urlEndPoint: string = 'http://localhost:8080/api/products'

  private httpHeaders = new HttpHeaders({'content-type': 'application/json'})

  //Lista carrito
  private myList: Productos[] = [];

  //Carrito observable
  private myCart = new BehaviorSubject<Productos[]>([]);
  myCart$ = this.myCart.asObservable();

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

  addProductos(producto: Productos) {

    if(this.myList.length === 0) {
      producto.amount = 1;
      this.myList.push(producto)
      this.myCart.next(this.myList);
    }else{
      const productMod = this.myList.find((element) => {
        return element.idProduct === producto.idProduct
      })
      if(productMod){
        productMod.amount = productMod.amount + 1;
        this.myCart.next(this.myList);
      }else{
        producto.amount = 1;
        this.myList.push(producto);
        this.myCart.next(this.myList);
      }
    }
  }

  deleteProducto(idProduct:number){
    this.myList = this.myList.filter((producto)=>{
      return producto.idProduct != idProduct
    })
    this.myCart.next(this.myList);
  }

  findProductById(idProduct:number) {
    return this.myList.find((element) => {
      return element.idProduct === idProduct;

    })
  }

  totalCart(){
    const total = this.myList.reduce(function (acc, producto){
      return acc + (producto.amount * producto.price);},0)
      return total;
  }

  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
      catchError(e => {
        this.router.navigate([`/lista-productos`]);
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }

  createProduct(producto: Productos) : Observable<any> {
    return this.http.post(this.urlEndPoint, producto, { headers : this.httpHeaders}).pipe(
      map((response: any) => response.producto as Productos),
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    )
  }

  updateProduct(producto: Productos) : Observable<any> {
    return this.http.put(`${this.urlEndPoint}/${producto.idProduct}`,producto, { headers : this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/${id}`,{ headers : this.httpHeaders}).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        Swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(() => {
          const error: any = new Error(e.error.mensaje);
          return error;
        });
      })
    );
  }

  // addItem(cartItem: CartItem): Observable<any> {
  //   return(`${this.urlEndPoint}/${Cart}`).pipe(
  //     catchError(e => {
  //       this.router.navigate([`/carrito`]);
  //       console.error(e.error.mensaje);
  //       Swal.fire(e.error.mensaje, e.error.error, 'error');
  //       return throwError(() => {
  //         const error: any = new Error(e.error.mensaje);
  //         return error;
  //       });
  //     })
  //   );
  // }

}
