import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Productos } from 'src/app/services/productos';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.css'],
})
export class FormularioTarjetaComponent implements OnInit {
  titleCreate: string = 'Registre los datos de la tarjeta';
  submitted: boolean = false;

  form: FormGroup = new FormGroup({
    nameClient: new FormControl(''),
    typeCard: new FormControl(''),
    numberCard: new FormControl(''),
    securityCode: new FormControl(''),
    expirationMonth: new FormControl(''),
    expirationYear: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productoService: ListaProductosService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameClient: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
        ],
      ],
      typeCard: ['', [Validators.required]],
      numberCard: [
        '',
        [
          Validators.required,
          Validators.minLength(13),
          Validators.maxLength(18),
        ],
      ],
      securityCode: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(4)],
      ],
      expirationMonth: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
      ],
      expirationYear: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(2)],
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  saveData(): void {
    this.submitted = true;
    console.log(this.form.value);
  }

  totalCart() {
    const result = this.productoService.totalCart();
    return result;
  }

  totalCompra() {
    const r = this.productoService.totalCompra();
    return r;
  }

  generarBoleta() {
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
  }
}
