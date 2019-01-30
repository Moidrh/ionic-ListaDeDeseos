import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from 'src/models';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent {

  lista: Lista;

  constructor( public deseosService: DeseosService, private navCtrl: NavController, private routes: ActivatedRoute) {
    const titulo = this.routes.snapshot.paramMap.get('titulo');
    this.lista = new Lista(titulo);
  }

  goBack() {
    this.navCtrl.navigateBack('/tabs/pendientes');
  }
}
