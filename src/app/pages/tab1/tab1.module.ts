import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';

import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ContentHeaderComponent } from 'src/app/shared/components/content-header/content-header.component';
import { ExploreContainerComponentModule } from '../../shared/components/explore-container/explore-container.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    HeaderComponent,
    ContentHeaderComponent,
    ExploreContainerComponentModule,
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
