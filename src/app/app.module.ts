import { User } from './../model/user';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AcessorioPageModule } from './../pages/acessorio/acessorio.module';
import { InicialPage } from './../pages/inicial/inicial';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth"

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { InicialPageModule } from '../pages/inicial/inicial.module';
import { from } from 'rxjs/observable/from';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    InicialPageModule,
    AcessorioPageModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroPage,
    InicialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
