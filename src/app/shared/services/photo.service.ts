import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Preferences } from '@capacitor/preferences';
import { IUserPhoto } from '../interfaces/iuser.photo';
import { PhotoFilesystem } from '../util/PhotoFilesystem';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: IUserPhoto[] = [];
  private PHOTO_STORAGE: string = 'photos';


  constructor(private photoFilesystem: PhotoFilesystem) { }

  public async addNewToGallery() {
    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    // Save the picture and add it to photo collection
    const savedImageFile = await this.savePicture(capturedPhoto);
    this.photos.unshift(savedImageFile);
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos),
    });
  }

  public async loadSaved() {
    // Retrieve cached photo array data
    const { value } = await Preferences.get({ key: this.PHOTO_STORAGE });
    this.photos = (value ? JSON.parse(value) : []) as IUserPhoto[];
    // transformation needed depending on platform
    await this.photoFilesystem.platformDependentPhotos(this.photos);
  }

  private async savePicture(photo: Photo) { 
    // Write the file to the data directory
    const fileName = Date.now() + '.jpeg';
    // format is different depending on platform
    return await this.photoFilesystem.platformDependentResult(fileName, photo);
  }

  public async deletePicture(photo: IUserPhoto, position: number) {
    // Remove this photo from the Photos reference data array
    this.photos.splice(position, 1);
  
    // Update photos array cache by overwriting the existing photo array
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.photos)
    });
  
    // delete photo file from filesystem
    const filename = photo.filepath
                        .substring(photo.filepath.lastIndexOf('/') + 1);
  
    await this.photoFilesystem.deleteFile(filename);
  }
}
