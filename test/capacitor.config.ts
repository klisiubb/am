import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.klisiu.app',
  appName: 'UBB Routing App',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
