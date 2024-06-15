import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../../shared/components/explore-container/explore-container.component';
import { ContentHeaderComponent } from '../../shared/components/content-header/content-header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss'],
    standalone: true,
    imports: [HeaderComponent, IonicModule, CommonModule, ContentHeaderComponent, ExploreContainerComponent]
})
export class Tab3Page {

  readonly title = "Tab 3";

  constructor() {}

}
