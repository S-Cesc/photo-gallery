import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Directory, Filesystem, WriteFileResult } from '@capacitor/filesystem';
import { Photo } from '@capacitor/camera';
import { IUserPhoto } from '../interfaces/iuser.photo';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoFilesystem {

  constructor(private platform: Platform) {
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
          resolve(reader.result);
      };
      reader.readAsDataURL(blob);
    });

    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await convertBlobToBase64(blob) as string;
  }

  public async platformDependentResult(fileName: string, photo: Photo): Promise<IUserPhoto> {
    // Convert photo to base64 format, required by Filesystem API to save
    const base64Data = await this.readAsBase64(photo);
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });
    if (this.platform.is('hybrid')) {
        // Display the new image by rewriting the 'file://' path to HTTP
      // Details: https://ionicframework.com/docs/building/webview#file-protocol
      return {
        filepath: savedFile.uri,
        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
      };
    }
    else {
      // Use webPath to display the new image instead of base64 since it's
      // already loaded into memory
      return {
        filepath: fileName,
        webviewPath: photo.webPath
      };
    }
  }

  public async platformDependentPhotos(photos: IUserPhoto[]) {
    // Easiest way to detect when running on the web:
    // “when the platform is NOT hybrid, do this”    
    if (!this.platform.is('hybrid')) {
      // Display the photo by reading into base64 format
      for (let photo of photos) {
        // Read each saved photo's data from the Filesystem
        const readFile = await Filesystem.readFile({
            path: photo.filepath,
            directory: Directory.Data
        });

        // Web platform only: Load the photo as base64 data
        photo.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
      }
    }
  }

  public async deleteFile(filename: string) {
    // same anyway; it is not aware of platform
    await Filesystem.deleteFile({
      path: filename,
      directory: Directory.Data
    });
  }

}
