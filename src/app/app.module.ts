import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { IntroSlidesPage } from '../pages/intro-slides/intro-slides';

import { LoginPage } from '../pages/login/login';
import {LogoutPage} from  '../pages/logout/logout';
import { RegisterPage } from '../pages/register/register';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';

import { ProductsPage } from '../pages/products/products';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { CartPage } from '../pages/cart/cart';
import { OrdersPage } from '../pages/orders/orders';

import { AppdatePage } from '../pages/appdate/appdate';
import { ApptimePage } from '../pages/apptime/apptime';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { BillingPage } from '../pages/billing/billing';
import { LocationPage } from '../pages/location/location';
import { Geolocation } from '@ionic-native/geolocation';
// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    MyApp,
    IntroSlidesPage,
    LoginPage,
    RegisterPage,
    ForgotPassPage,
    ProductsPage,
    ProductDetailsPage,
    CartPage,
    OrdersPage,
	AppdatePage,
	ApptimePage,
    BillingPage,
	LocationPage,
    LogoutPage
  ],
  imports: [
    BrowserModule,
	IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp({         //<----ENTER FIREBASE CREDENTIAL HERE
      apiKey: "AIzaSyDqii2UtRrTfgISBnix6D5GHy8abxi6Raw",
      authDomain: "pawprint-d33f5.firebaseapp.com",
      databaseURL: "https://pawprint-d33f5.firebaseio.com",
      projectId: "pawprint-d33f5",
      storageBucket: "pawprint-d33f5.appspot.com",
      messagingSenderId: "714130770089"
    }),                                       
    AngularFireDatabaseModule,                
    AngularFireAuthModule                     
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroSlidesPage,
    LoginPage,
    RegisterPage,
    ForgotPassPage,
    ProductsPage,
    ProductDetailsPage,
    CartPage,
    OrdersPage,
	AppdatePage,
	ApptimePage,
    BillingPage,
	LocationPage,
    LogoutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	Geolocation,
	DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
