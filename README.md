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

## Recordatori d'Angular i Ionic

- Desenvolupament amb els components de: `Ionic Framework UI components` (estil compatible amb mòbil)
- S'instal·la Ionic i Android Studio.
  - Per instal·lar Ionic: `npm install -g @ionic/cli native-run cordova-res`.
- **1.** Crear una app fent servir capacitor: `ionic start photo-gallery tabs --type=angular --capacitor`
  - Es crea una aplicació estructurada en tabs (però no *standalone*).
  - Capacitor is an open source project that runs modern Web Apps natively on iOS, Android, Electron, and Web, using Progressive Web App technology.
  - Also available Cordova: Like Capacitor, Cordova is an open source project that runs web apps across multiple platforms, though not Electron nor web as a Progressive Web App. 
  - Capacitor is backwards compatible with Cordova.
- **2.** Crear una App: `ionic start photo-gallery tabs --type=angular --capacitor`
  - Entrar en el directori i executar l'editor des de la carpeta: `code .`.
- **3.** Instal·la els plugins necessaris de capacitor; p.e.: `npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem`.
  - Si falten plugins es poden instal·lar després.
- **4.** La funcionalitat d'alguns plugins hi és disponible des de els components PWA, però s'han d'instal·lar: `npm install @ionic/pwa-elements`.
  - En main.ts importarem els components: `import { defineCustomElements } from '@ionic/pwa-elements/loader';`
- **5.** Ja podem executar l'aplicació (en web) `ionic serve`
- **6.** Com a exemple s'afegeix un FAB (*floating action button*) per disparar la càmera.
  - Fabs are container elements that contain one or more fab buttons. They should be placed in a fixed position that does not scroll with the content. Fabs should have one main fab button. Fabs can also contain one or more fab lists which contain related buttons that show when the main fab button is clicked.
- **7.** Ionic ofereix la funcionalitat de generar fitxers per als diferents tipus d'elements: components, serveis...
  - p.e. per crear un servei "*photo*": `ionic g service services/photo`.
- **8.** La API **preferences** en Web fa servir *local storage* emmagatzemant parelles clau-valor.
- **9.** La API **Filesystem** en Web fa servir la *base de dades indexada*, amb capacitat per a objectes més grans.
  - Però per al filesystem s'ha de distingir segons la plataforma; caldrà injectar l'objecte `Platform`: `import { Platform } from '@ionic/angular';` `constructor(private platform: Platform) { }`.
  - En Web el *filesystem* ha de desar les dades binàries en format base64 (veure codi)
  - En `hibrid` es crida a `convertFileSrc` per evitar el protocol `file://` i fer servir `http://`.
- **10.** Build: `ionic build`.
- **11.** Crear els projectes iOS i Android:
  - `ionic cap add ios`
  - `ionic cap add android`
  - **IMPORTANT**: Cada vegada que es fa un *build* s'ha de copiar la informació als projectes iOS i Android:
    - `ionic cap copy`
  - **IMPORTANT**: Si es fan canvis en aquests projectes s'ha de sincronitzar el projecte amb els canvis:
    - `ionic cap sync`
  - **12.** Desplegar les aplicacions iOS i Android
    - Per desplegar en Apple s'ha de tenir un Mac amb *Xcode*.
    - Per Android es fa servir `Android Studio` (instal·lació de moltes Gb)
      - `ionic cap open android`
      - S'ha de comprovar que en el `AndroidManifest.xml` hi són els permisos requerits (per exemple per fer servir laa càmera, o l'emmagatzematge).
  - **13.** A continuació es pot executar l'**emulador** en Android Studio.
    - També es pot connectar un dispositiu, sempre que tingui actives les opcions de desenvolupador.
  - **14.** L'execució simultània a la modificació del codi en l'emulador o en un dispositiu real es pot aconseguir amb:
    - `ionic cap run android -l --external`
    - **IMPORTANT**: Android Studio incorpora el seu propi java.jdk Això significa que la versió de JDK que faran servir Android Studio i Visual Studio Code probablement serán diferents, incorporant problemes quan s'executen ordres des de Visual Studio Code que s'han d'executar en Android Studio (l'emulador, o l'execució en un dispositiu).
    - També quan existeix una actualització pendent d'Android Studio l'execució en dispositius/emulador es pot veure afectada, fins que s'actualitza.
  - **15.** Per desplegar l'aplicació [AppFlow](https://ionic.io/docs/appflow/) permet fer-ho directament des de *Github*
    - S'ha de connectar amb *Github*
    - Llavors es pot fer servir *Appflow SDK* per gestionar-ho des del projecte, o fer servir la interfície web; sempre es publica des de *Github*, de manera que *Appflow SDK* no sembla massa necessari.
      - És cert que *Appflow SDK* permet actualitzar automàticament el codi binari dels dispositius associats (*Deploy Live Update*). Només sembla important en cas de repetits desplegaments erronis de l'aplicació, que en general no haurien d'haver superat la prova *WiFi* (probablement quan està pensat quan cal provar molts dispoitius diferents, o n'hi ha un equip de proves).
  - **16.** **Desplegament final (*Native Binary*)**: Per a un *desplegament públic* (*release*, no *debug*) es requereix generar un certificat. El certificat es pot generar am l'eina de línia d'ordres *Keytool*; per exemple:
    - `keytool -genkey -v -keystore MY-RELEASE-KEY.keystore -alias MY_ALIAS_NAME -keyalg RSA -keysize 2048 -validity 10000 -storetype jks` 
  
  > [!CAUTION]
  > Securely store a backup of your keystore password, key password, alias and keystore file. These are not recoverable and can prevent you ever being able to update an App in the Play Store.

    - També *Android Studio* permet generar els certificats amb un formulari més *visual*; es pot trobar en: `Build > Generated Signed Bundle or APK`; l'opció '*Bundle*' desa el certificat en el disc, en l'ubicació que indiquem.
  



