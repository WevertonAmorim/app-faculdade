import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { InicialPage } from '../inicial/inicial';
import { User } from '../../model/user';
import { AngularFireAuth } from 'angularfire2/auth';

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

  }

