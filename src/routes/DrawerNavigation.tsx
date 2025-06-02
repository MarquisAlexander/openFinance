import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from '@react-native-vector-icons/feather';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {Customers} from '../screens/Customers';
import {CustomDrawerContent} from '../components/CustomDrawerContent';
import Logo from '../assets/LogoTeddy.png';
import {SelectedCustomers} from '../screens/SelectedUsers';
export function MyDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        drawerPosition: 'right',
        drawerStyle: styles.drawerStyle,
        headerTitle: '',
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon
              name="menu"
              size={30}
              color="#AAAAAA"
              style={styles.headerMenuIcon}
            />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <Image source={Logo} style={styles.headerLogo} resizeMode="contain" />
        ),
        headerStyle: styles.headerStyle,
      })}>
      <Drawer.Screen name="Home" component={Customers} />
      <Drawer.Screen name="SelectedCustomers" component={SelectedCustomers} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
  },
  headerMenuIcon: {
    marginRight: 20,
  },
  headerLogo: {
    width: 70,
    height: 34,
    marginLeft: 20,
  },
  headerStyle: {
    backgroundColor: '#f5f5f5',
    height: 70,
  },
});
