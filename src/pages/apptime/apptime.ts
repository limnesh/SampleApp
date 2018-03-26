import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';


import {CartService} from '../../providers/cart.service';
import {AuthService} from '../../providers/auth.service';
import {CustomerService} from '../../providers/customer.service';
import {SharedService} from '../../providers/shared.service';

import {LocationPage} from '../location/location';

import {AppdatePage} from '../appdate/appdate';
//import {ApptimePage} from '../apptime/apptime';

import {BillingPage} from '../billing/billing';

import {OrdersPage} from '../orders/orders'

@IonicPage()
@Component({
  selector: 'page-apptime',
  templateUrl: 'apptime.html',
  providers: [CartService,AuthService,CustomerService,SharedService]
})
export class ApptimePage {
  addresses :  any;
  delivery_details: string;
  payment_mode : string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,

              public alertCtrl: AlertController,

              public cartService: CartService,
              public authService: AuthService,
              public custService: CustomerService,
              public sharedService: SharedService
             ) {
        this.payment_mode="cod";
        this.delivery_details="";
        this.custService.loadDeliveyAddress(this.authService.getLoggedUID());
        this.addresses = this.custService.deliveryAddresses;
        
  }
	
  goBack() {
      this.navCtrl.pop();
  }
  callBilling() : void{
	 /*
	 this.navCtrl.setRoot(ApptimePage, {
			  navCtrl: NavController, 
              navParams: NavParams,

              alertCtrl: AlertController,

              cartService: CartService,
              authService: AuthService,
              custService: CustomerService,
              sharedService: SharedService
	});*/
	this.navCtrl.push(BillingPage);
  }
  /*callBilling() : void{
	 
	 this.navCtrl.setRoot(BillingPage, {
			  navCtrl: NavController, 
              navParams: NavParams,

              alertCtrl: AlertController,

              cartService: CartService,
              authService: AuthService,
              custService: CustomerService,
              sharedService: SharedService
	});*/

  
 
}
