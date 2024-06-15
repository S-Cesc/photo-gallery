# Pràctica: tutorial d'Ionic
## Repositori
[Repositori Github](https://github.com/S-Cesc/photo-gallery)
[AppFlow](https://dashboard.ionicframework.com/app/ac6b78b2/build/builds)

## Included

- Independent tabs components with lazy load. Project converted using [Standalone migration](https://github.com/angular/angular/tree/main/packages/core/schematics/ng-generate/standalone-migration) and the example [Angular tabs example using standalone components](https://github.com/sean-perkins/ionic-angular-standalone/tree/main), but the `<ion-router-outlet [environmentInjector]="environmentInjector"></ion-router-outlet>` there were a temporal patch for Angular 14, which was not added into Angular 15, so instructions from [How to lazy load Standalone components in Angular](https://kurtwanger40.medium.com/how-to-lazy-load-standalone-components-ff6b2298259f) were also used.
- Platform dependency centralized for user photos in the specific class PhotoFilesystem, to use user photos regardless of platform 
- Standalone header with an icon for error notification
- IMessage and **messageHub.service**
- Global **exception handler** using a ToastController to allow dynamic screen toast creation for user error notification
- ErrorWithMessage for Error generalization (standaritzation for anomalous thrown of errors)

