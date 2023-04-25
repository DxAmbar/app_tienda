import { Component, Input, OnInit } from '@angular/core';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import {
  faSquareMinus,
  faSquarePlus,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

//import pdfMake from 'pdfmake/build/pdfmake';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Productos } from 'src/app/services/productos';
//pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  @Input() productos: Productos[] = [];

  faMinus = faSquareMinus;
  faPlus = faSquarePlus;
  faTrash = faTrash;

  // productos: any[] = [];

  // get totalCompra() {
  //   return this.productos.reduce(
  //     (total, producto) => total + producto.amount,
  //     0
  //   );
  // }

  myCart$ = this.productoService.myCart$;

  constructor(private productoService: ListaProductosService) {}

  ngOnInit(): void {}

  totalProducto(price: number, units: number) {
    return price * units;
  }

  deleteProducto(idProduct: number) {
    this.productoService.deleteProducto(idProduct);
  }

  updateUnits(operation: string, idProduct: number) {
    const product = this.productoService.findProductById(idProduct);
    if (product) {
      if (operation === 'minus' && product.amount > 0) {
        product.amount = product.amount - 1;
      }
      if (operation === 'add') {
        product.amount = product.amount + 1;
      }
      if (product.amount === 0) {
        this.deleteProducto(idProduct);
      }
    }
  }

  totalCart() {
    const result = this.productoService.totalCart();
    return result;
  }

  totalCompra() {
    const r = this.productoService.totalCompra();
    return r;
  }

  /*generarBoleta() {
    const docDefinition = {
      content: [
        { text: 'Boleta de compra', style: 'header' },
        {
          text: `Total de productos: ${this.totalCompra()}`,
          style: 'subheader',
        },
        { text: `Total a pagar: $${this.totalCart()}`, style: 'subheader' },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10],
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 10, 0, 5],
        },
      },
    };

    pdfMake.createPdf(docDefinition).open();
  }*/

  // createPDF() {
  //   const documentDefinition = {
  //     content: [
  //       { text: 'Boleta de compra', style: 'header' },
  //       { text: '\n\n' },
  //       {
  //         table: {
  //           widths: ['*', '*', '*'],
  //           body: [
  //             ['Producto', 'Precio unitario', 'Cantidad'],
  //             ...this.productos.map((producto) => [
  //               producto.name,
  //               `$${producto.price}`,
  //               producto.amount,
  //             ]),
  //           ],
  //         },
  //       },
  //       { text: '\n\n' },
  //       { text: `Total de la compra: $${this.totalCart()}`, style: 'total' },
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 18,
  //         bold: true,
  //       },
  //       total: {
  //         fontSize: 16,
  //         bold: true,
  //         alignment: 'right',
  //       },
  //     },
  //   };

  //   pdfMake.createPdf(documentDefinition).open();
  // }
}
