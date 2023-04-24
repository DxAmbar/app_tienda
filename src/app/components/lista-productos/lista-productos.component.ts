import { Component, Input, OnInit } from '@angular/core';
import { faPenSquare, faPlus, faTrashCan, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import { Productos } from 'src/app/services/productos';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit{

  @Input() productos : Productos[] = [];
  @Input() mensaje: string | undefined;

  faAddProduct = faPlus;
  faExclamation = faTriangleExclamation;
  faEditPerson = faPenSquare;
  faDeletePerson = faTrashCan;
  
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

  deleteProduct(product: Productos) : void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success m-2',
        cancelButton: 'btn btn-danger m-2'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro?',
      text: `¿Deseas eliminar el producto ${product.name}? Esta acción no se puede revertir`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar.',
      cancelButtonText: '¡Me arrepiento!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productoService.deleteProduct(product.idProduct).subscribe(
          response => {
            this.productos = this.productos.filter(p => p != product)
            swalWithBootstrapButtons.fire(
              'Eliminado',
              'El producto ha sido eiminado',
              'success'
            )
          }
        )
      }
      else if (result.dismiss === Swal.DismissReason.cancel)
      {
        swalWithBootstrapButtons.fire(
          'Acción cancelada',
          'El producto sigue a la venta',
          'error'
        )
      }
    })
  }

}
