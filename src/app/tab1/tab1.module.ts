import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab1Page } from './tab1.page';

import { CommonModule } from '@angular/common';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
