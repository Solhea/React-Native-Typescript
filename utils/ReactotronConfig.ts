import {NativeModules} from 'react-native';
import {reactotronRedux} from 'reactotron-redux';
import {name as appName} from '../app.json';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

let reactotron: any = null;
if (__DEV__) {
  let scriptHostname;
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split('://')[1].split(':')[0];

  reactotron = Reactotron?.setAsyncStorageHandler!(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({name: appName}) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .connect(); // let's connect!

  reactotron?.clear();
}
export default reactotron;
