import { Component, Input, OnInit } from '@angular/core';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import { Productos } from 'src/app/services/productos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  @Input() productos : Productos[] = [];
 

    constructor(private productoService: ListaProductosService){}

    ngOnInit(): void {
      this.getProductos();
    }
  
    getProductos() : void{
      this.productoService.getProductos().subscribe(
        (data) => {
          this.productos = data.products
          console.log(this.productos);
        }
      )
    }

    addToCart(producto: Productos) {
      return this.productoService.addProductos(producto);
    }

    

}
