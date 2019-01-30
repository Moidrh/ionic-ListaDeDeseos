import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { Lista } from 'src/models';
import { NavController, AlertController } from '@ionic/angular';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: './pendientes.component.html',
  styleUrls: ['./pendientes.component.scss']
})
export class PendientesComponent {

  constructor( public deseosService: DeseosService, private navCtrl: NavController,
              private alertCtrl: AlertController) {
  }

  listaSeleccionada( lista: Lista) {
    console.log( lista);
  }

   async agregarLista() {
    // this.navCtrl.navigateForward('/tabs/agregar');
    const alerta = await this.alertCtrl.create({
      header: 'Nueva lista',
      message: 'Nombre de la nueva lista que desea',
      inputs: [{
        name: 'titulo',
        placeholder: 'Nombre de la lista'
      }],
      buttons: [{
        text: 'Cancelar'
      },
        {
        text: 'Agregar',
        handler: data => {
          if ( data.titulo.length === 0) {
            return;
          }
          this.navCtrl.navigateForward(`/tabs/agregar/${data.titulo}`);
          console.log(data);
        }
        }
      ]
    });

    await alerta.present();
  }

}
