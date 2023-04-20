import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/services/productos'; 
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ListaProductosService } from 'src/app/services/lista-productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  titleCreate : string = "Formulario registro producto nuevo";
  titleUpdate : string = "Formulario actualización producto"
  product: Productos = new Productos();
  submited : boolean = false;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''), 
    account: new FormControl(''), 
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
          ]
        ],
        price : [
          0,
          [
            Validators.required,
            Validators.min(0)
          ]
        ],
        account : [
          '',
          [
            Validators.required,
          ]
        ],
        category : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        picture : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(1000)
          ]
        ],
      }
    )
  }

  get f(): { [key: string] : AbstractControl } {
    return this.form.controls;
  }

}
