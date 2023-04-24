import { Component, OnInit } from '@angular/core';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import { faSquareMinus, faSquarePlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  faMinus = faSquareMinus;
  faPlus = faSquarePlus;
  faTrash = faTrash;

  myCart$ = this.productoService.myCart$

  constructor(private productoService: ListaProductosService){}

  ngOnInit(): void {
  }

  totalProducto(price:number, units:number){
    return price * units
  }

  deleteProducto(idProduct:number){
    this.productoService.deleteProducto(idProduct);
  }

  updateUnits(operation:string, idProduct:number){
    const product = this.productoService.findProductById(idProduct)
    if(product){
      if(operation === 'minus' && product.amount > 0){
        product.amount = product.amount - 1;
      }
      if(operation === 'add'){
        product.amount = product.amount + 1;
      }
      if(product.amount === 0) {
        this.deleteProducto(idProduct);
      }
    }
  }

  totalCart(){
    const result = this.productoService.totalCart();
    return result;
  }
 
  

}
