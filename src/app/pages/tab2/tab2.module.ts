import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { Tab2PageRoutingModule } from './tab2-routing.module';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ContentHeaderComponent } from 'src/app/shared/components/content-header/content-header.component';
import { ExploreContainerComponentModule } from '../../shared/components/explore-container/explore-container.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    HeaderComponent,
    ContentHeaderComponent,
    ExploreContainerComponentModule,
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
