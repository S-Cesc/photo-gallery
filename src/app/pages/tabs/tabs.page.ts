import { CommonModule } from '@angular/common';
import { Component /*, EnvironmentInjector */ } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule
    ]
})
export class TabsPage {

  constructor(/* public environmentInjector: EnvironmentInjector */) {}

}
