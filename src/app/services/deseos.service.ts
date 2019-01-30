import { Injectable } from '@angular/core';
import { Lista } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    
    const lista1 = new Lista('Recolectar mascaras de Spiderman');
    const lista2 = new Lista('Estudiar lenguajes de programacion');

    this.listas.push(lista1, lista2);

    console.log(this.listas);
    
  }
}
