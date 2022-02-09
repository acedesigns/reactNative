/* =======================================================
 *
 * Created by anele on 2022/02/09.
 *
 * @anele_ace
 *
 * =======================================================
 */

import {initializeApp} from 'firebase/app';
//import auth from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

const app = initializeApp(firebaseConfig);

export {app};
