import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BillingPage } from './billing';
import { AppdatePage } from './appdate';
import { ApptimePage } from './apptime';
@NgModule({
  declarations: [
    ApptimePage,
  ],
  imports: [
    IonicPageModule.forChild(ApptimePage),
  ],
})
export class ApptimePageModule {}
