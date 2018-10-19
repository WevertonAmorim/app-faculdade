import { listprodut } from './../../model/listprodut';
import { AcessorioPage } from './../acessorio/acessorio';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Img } from 'ionic-angular';

/**
 * Generated class for the InicialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicial',
  templateUrl: 'inicial.html',
})
export class InicialPage {
  listprodut: listprodut[] =[ 
    new listprodut("../../assets/imgs/weber.png", "Kit Weber 40 Opala 6 Cil Á Gasolina - Completo R$2.150,00", "FICHA TÉCNICA: - UM COLETOR DE ADMISSÃO GASOLINA - KIT DE ACIONAMENTOS- UMA WEBER 40 GASOLINA ( BRASILEIRA )- CORNETAS OU FILTRO FICA A ESCOLHA DO CLIENTE."),
    new listprodut("../../assets/imgs/weber.png", "Kit Weber 40 Opala 6 Cil Á Gasolina - Completo R$2.150,00", "FICHA TÉCNICA: - UM COLETOR DE ADMISSÃO GASOLINA - KIT DE ACIONAMENTOS- UMA WEBER 40 GASOLINA ( BRASILEIRA )- CORNETAS OU FILTRO FICA A ESCOLHA DO CLIENTE."),
    new listprodut("../../assets/imgs/weber.png", "Kit Weber 40 Opala 6 Cil Á Gasolina - Completo R$2.150,00", "FICHA TÉCNICA: - UM COLETOR DE ADMISSÃO GASOLINA - KIT DE ACIONAMENTOS- UMA WEBER 40 GASOLINA ( BRASILEIRA )- CORNETAS OU FILTRO FICA A ESCOLHA DO CLIENTE.")
    

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicialPage');
    }
  acessaracessorio() { this.navCtrl.push(AcessorioPage); }
}
