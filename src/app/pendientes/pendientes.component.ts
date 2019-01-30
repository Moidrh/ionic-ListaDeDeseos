import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from 'src/models';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss']
})
export class PendientesComponent {

  constructor( public deseosService: DeseosService) {
  }

  listaSeleccionada( lista: Lista) {
    console.log( lista);
  }

}
