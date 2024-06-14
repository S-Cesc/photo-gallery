import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { PhotoService } from '../../shared/services/photo.service';
import { IUserPhoto } from '../../shared/interfaces/iuser.photo';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  readonly title = "Photo Gallery";

  constructor(public photoService: PhotoService,
              public actionSheetController: ActionSheetController) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
  }  

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  
  public async showActionSheet(photo: IUserPhoto, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
          }
      }]
    });
    await actionSheet.present();
  }

}
