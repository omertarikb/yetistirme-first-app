/**
 * @format 
 */

import {AppRegistry} from 'react-native';

//App kısmı -> default export ile export edilmiş değişken
//{age,func} -> tekil olarak export edilmiş değişkenler
import App, {age,func} from './StylingLayout/App';

import App2 from './StylingLayout/App2';
import App3 from './StylingLayout/App3';
import App4 from './StylingLayout/App4';

import HomeScreen from './CoreComponents/HomeScreen';

import ShoppingList from './CoreComponents/ShoppingList';

import {name as appName} from './app.json';
//pull için ekleme
AppRegistry.registerComponent(appName, () => HomeScreen);
