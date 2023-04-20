import { Component, Input, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import { Productos } from 'src/app/services/productos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{

  @Input() productos : Productos[] = [];
  @Input() mensaje: string | undefined;
  faAddProduct = faPlus;
  
  constructor(private productoService: ListaProductosService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() : void{
    this.productoService.getProductos().subscribe(
      (data) => {
        this.productos = data.products
        this.mensaje = data.mensaje
        console.log(this.productos);
        console.log(this.mensaje);
      }
    )

  }

}
