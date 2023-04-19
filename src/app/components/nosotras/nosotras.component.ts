import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotras',
  templateUrl: './nosotras.component.html',
  styleUrls: ['./nosotras.component.css']
})
export class NosotrasComponent implements OnInit {
  listaProgramadoras: any = [
    {
      id: 1,
      name: 'Constanza Mac-Namara Z',
      hobby: 'Me gusta hacer Trekking, Leer, ver peliculas, viajar',
      description: '',
      image: '',
    },
    {
      id: 2,
      name: 'Daniela Baeza',
      hobby: '',
      description: '',
      image: '',
    },
    {
      id: 3,
      name: 'Misdely Morales',
      hobby: '',
      description: '',
      image: '',
    },
    {
      id: 4,
      name: 'Ashley Bustos',
      hobby: 'Leer cómics, ver películas en familia y mi prioridad son las citas con Dios',
      description: '',
      image: '',
    }
];

constructor(){ }

ngOnInit(): void {
  
}

}

