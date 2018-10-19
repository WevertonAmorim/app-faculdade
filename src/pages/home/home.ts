import { User } from './../../model/user';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { InicialPage } from '../inicial/inicial';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {} as User;

  msgErro: string;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    private toast: ToastController) {

  }



  async entrar(user: User){
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(success => {
      this.navCtrl.setRoot(InicialPage);
   }).catch(() => {
    this.toast.create({
      message: "E-mail ou Senha não confere",
      duration: 3000
    }).present();
   });
}

cadastro() {
    this.navCtrl.push('CadastroPage');
  }

  entrarcomfb(){
    this.afAuth.auth.signInWithRedirect (new firebase.auth.FacebookAuthProvider())
    .then(res =>{
      this.navCtrl.setRoot(InicialPage);
    })


  }

  }

