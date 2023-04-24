import { Component, Input, OnInit } from '@angular/core';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import { Productos } from 'src/app/services/productos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  category: string | undefined;

  @Input() productos : Productos[] = [];
 

    constructor(
      private productoService: ListaProductosService,
      private route: ActivatedRoute)
      {}

    ngOnInit(): void {
      this.route.queryParams
      .subscribe(params => {
        this.category = params['category']; 
        this.getProductos();
      }
    );
    }
  
    getProductos() : void{
      this.productoService.getProductos().subscribe(
        (data) => {
          console.log(this.category)
          if(this.category){
            this.productos = data.products.filter((p:any) => p.category.toUpperCase() === this.category?.toUpperCase())
          }else {
          this.productos = data.products
          }
        }
      )
    }

    addToCart(producto: Productos) {
      return this.productoService.addProductos(producto);
    }

    
    

}
