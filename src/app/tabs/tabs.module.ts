import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { PopoverModalComponent } from '../popover-modal/popover-modal.component';
import { ExploreContainerComponent } from './explore-container/explore-container.component';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage, ExploreContainerComponent, PopoverModalComponent]
})
export class TabsPageModule {}
