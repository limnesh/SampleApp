import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';


import {CartService} from '../../providers/cart.service';
import {AuthService} from '../../providers/auth.service';
import {CustomerService} from '../../providers/customer.service';
import {SharedService} from '../../providers/shared.service';

import {LocationPage} from '../location/location';

//import {AppdatePage} from '../appdate/appdate';
import {ApptimePage} from '../apptime/apptime';

import {OrdersPage} from '../orders/orders'
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-appdate',
  templateUrl: 'appdate.html',
  providers: [CartService,AuthService,CustomerService,SharedService]
})
export class AppdatePage {
  addresses :  any;
  delivery_details: string;
  payment_mode : string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,

              public alertCtrl: AlertController,

              public cartService: CartService,
              public authService: AuthService,
              public custService: CustomerService,
              public sharedService: SharedService,
			  
			  private datePicker: DatePicker
             ) {
        this.payment_mode="cod";
        this.delivery_details="";
        this.custService.loadDeliveyAddress(this.authService.getLoggedUID());
        this.addresses = this.custService.deliveryAddresses;
        
		
		this.datePicker.show({
		  date: new Date(),
		  mode: 'date',
		  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
		}).then(
		  date => console.log('Got date: ', date),
		  err => console.log('Error occurred while getting date: ', err)
		);
  }

  goBack() {
      this.navCtrl.pop();
  }
  callTime() : void{
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
	this.navCtrl.push(ApptimePage);
  }
 
}
