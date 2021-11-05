import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';
import { FirelistComponent } from './firelist/firelist.component';
import { IndexComponent } from './index/index.component';



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    

    
    
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDLhjMu7wsi_VwPLHI_RTc-iz-3N1-dwpM",
        authDomain: "angular-firebase-4653f.firebaseapp.com",
        projectId: "angular-firebase-4653f",
        storageBucket: "angular-firebase-4653f.appspot.com",
        messagingSenderId: "816407077531",
        appId: "1:816407077531:web:c04320008bc536add1dc3e"
      }
    ),


    RouterModule.forRoot(  // -> para habiliar rotas
      [
        {path: 'firelist', component: FirelistComponent}, 
        {path: 'index', component: IndexComponent}, 
        {path: '', redirectTo: 'index', pathMatch: 'full'}, 
      ]
    ),

    AngularFireAuthModule,  //-> usando o modulo de autenticacao

    AngularFireDatabaseModule,  //-> usando o modulo de banco de dados


  ],
  declarations: [ AppComponent, HelloComponent,FirelistComponent,IndexComponent],
  bootstrap:    [ AppComponent],
  providers: []
})
export class AppModule { }