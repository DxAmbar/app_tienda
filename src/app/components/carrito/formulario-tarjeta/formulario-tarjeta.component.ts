import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-tarjeta',
  templateUrl: './formulario-tarjeta.component.html',
  styleUrls: ['./formulario-tarjeta.component.css']
})
export class FormularioTarjetaComponent implements OnInit{

  titleCreate : string = "Registre los datos de la tarjeta"
  submitted : boolean = false;

  form: FormGroup = new FormGroup({
    nameClient: new FormControl(''),
    typeCard: new FormControl(''),
    numberCard: new FormControl(''),
    securityCode: new FormControl(''),
    expirationMonth: new FormControl(''),
    expirationYear: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nameClient : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(50)
          ]
        ],
        typeCard : [
          '',
          [
            Validators.required,
          ]
        ],
        numberCard : [
          '',
          [
            Validators.required,
            Validators.minLength(13),
            Validators.maxLength(18)
          ]
        ],
        securityCode : [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(4)
          ]
        ],
        expirationMonth : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(2)
          ]
        ],
        expirationYear : [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(2)
          ]
        ],
      }
    )
  }

  get f(): { [key: string] : AbstractControl } {
    return this.form.controls;
  }

  saveData() : void {
    this.submitted = true;
    console.log(this.form.value);
  }

}
