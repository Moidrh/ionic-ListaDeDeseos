import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from '../../models/lista.model';

@Component({
  selector: 'app-terminados',
  templateUrl: './terminados.component.html',
  styleUrls: ['./terminados.component.scss']
})
export class TerminadosComponent implements OnInit {

  constructor( public deseosService: DeseosService) { }

  ngOnInit() {
  }

  listaSeleccionada (lista: Lista) {
    console.log(lista);
    
  }


}
