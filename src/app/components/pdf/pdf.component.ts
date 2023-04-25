import { Component, OnInit } from '@angular/core';
import { CarritoComponent } from '../carrito/carrito.component';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// pdfMake.vfs = pdfFonts.pdfMake.vfs
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit{

  constructor () {}

  ngOnInit() {
  }

  createPdf(){
    

    const pdfDefinition: any = {
      content: [
        {
          text: "hola",
        }
      ]

    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }

}
