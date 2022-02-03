/* =======================================================
 *
 * Created by anele on 2021/06/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React from 'react';
import {DrawerContent} from '../shared/drawerContent';
import bottomTabNavigator from './bottomTabNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerStackNavigator = ({navigator}) => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={props => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={bottomTabNavigator} />
  </Drawer.Navigator>
);

export default DrawerStackNavigator;
