import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'todo.beanstalk',
  appName: 'todo-beanstalk',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
