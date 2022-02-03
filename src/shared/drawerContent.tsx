/* =======================================================
 *
 * Created by anele on 2021/06/08.
 *
 * @anele_ace
 *
 * =======================================================
 */

import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  Title,
  Drawer,
  Avatar,
  Caption,
  Paragraph,
  TouchableRipple,
} from 'react-native-paper';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {AuthContext} from '../components/context';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function DrawerContent(props) {
  const {logOutMethod} = useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://img2.pngio.com/united-states-avatar-organization-information-png-512x512px-user-avatar-png-820_512.jpg',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Thato Sikwane</Title>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon name="settings" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>

      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            logOutMethod();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
