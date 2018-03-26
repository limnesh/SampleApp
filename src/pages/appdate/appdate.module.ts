import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillingPage } from './billing';
import { AppdatePage } from './appdate';
import { ApptimePage } from './apptime';
@NgModule({
  declarations: [
    AppdatePage,
  ],
  imports: [
    IonicPageModule.forChild(AppdatePage),
  ],
})
export class AppdatePageModule {}
