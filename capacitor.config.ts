import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter.cesc',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      channel: 'development',
      appId: 'io.ionic.starter.cesc',
      //channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};

export default config;
