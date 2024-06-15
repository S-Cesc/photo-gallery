import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../../shared/components/explore-container/explore-container.component';
import { ContentHeaderComponent } from '../../shared/components/content-header/content-header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../shared/components/header/header.component';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss'],
    standalone: true,
    imports: [HeaderComponent, IonicModule, CommonModule, ContentHeaderComponent, ExploreContainerComponent]
})
export class Tab1Page {

  readonly title = "Tab 1";

  constructor() {}

}
