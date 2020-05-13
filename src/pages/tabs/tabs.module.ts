import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { ComponentsModule } from 'src/components/comoponent.module';
import { TeamDataShareService } from 'src/services/team-data-share.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage], 
  providers: [TeamDataShareService]
})
export class TabsPageModule {}
