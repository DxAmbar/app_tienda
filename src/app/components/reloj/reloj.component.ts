import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {

  fecha:number = Date.now();
  hora: any;

  ngOnInit() {

    this.mostrarHora();

  }

  mostrarHora(){
    this.hora =new Date ();

    setInterval(() =>{

    this.hora= new Date();
    
  },1000);
   
    //console.log(this.hora);
  }

}

