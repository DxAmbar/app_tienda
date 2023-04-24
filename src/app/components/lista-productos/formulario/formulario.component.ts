import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/services/productos'; 
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  titleCreate : string = "Registra el  nuevo producto";
  titleUpdate : string = "Formulario actualización producto"
  product: Productos = new Productos();
  submitted : boolean = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''), 
    stock: new FormControl(''), 
    category: new FormControl(''), 
    picture: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private productService: ListaProductosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        name : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        price : [
          0,
          [
            Validators.required,
            Validators.min(0)
          ]
        ],
        stock : [
          '',
          [
            Validators.required,
            Validators.min(0)
          ]
        ],
        category : [
          '',
          [
            Validators.required
          ]
        ],
        picture : [
          '',
          [
            Validators.required
          ]
        ],
      }
    )
  }

  get f(): { [key: string] : AbstractControl } {
    return this.form.controls;
  }

  onSubmit() : void {
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.createProduct();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  createProduct() : void {
    this.productService.createProduct(this.product).subscribe(
      product => {
        console.log(product);
        this.router.navigate(['/lista-productos']);
        Swal.fire({
          icon: 'success',
          title: 'Nuevo producto registrado',
          text: 'El producto ' + product.name + ' ha sido registrado con éxito', 
        })
      }
    );
  }

  getProduct(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if(id){
        this.productService.getProduct(id).subscribe(
          (product) => this.product = product
        )
      }
    });
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(
      product => {
        console.log(product);
        this.router.navigateByUrl('/lista-productos');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Datos actualizados',
          text: `Los datos del producto ${product.product.name} se han actualizado correctamente`,
          timer: 1000,
          showConfirmButton: false,
        });
      }
    );
  }
/*
  onFileSelect(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    const base64textString = btoa(binaryString);
    console.log(base64textString);
  }
*/
}
