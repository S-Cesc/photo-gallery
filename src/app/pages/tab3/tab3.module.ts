import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../../shared/components/explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { ContentHeaderComponent } from 'src/app/shared/components/content-header/content-header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    HeaderComponent,
    ContentHeaderComponent,
    ExploreContainerComponentModule,
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
