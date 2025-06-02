import Icon from '@react-native-vector-icons/feather';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import {styles} from './styles';
import Logo from '../../assets/LogoTeddy.png';

type DrawerItem = {
  iconName: string;
  label: string;
  onPress: () => void;
  idScreen?: string;
};

export function CustomDrawerContent({
  navigation,
  state,
}: DrawerContentComponentProps) {
  const activeRouteName = state.routeNames[state.index];

  function DrawerItem({iconName, label, onPress, idScreen}: DrawerItem) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={
          activeRouteName == idScreen
            ? styles.activatedDrawerItem
            : styles.drawerItem
        }>
        <Icon
          name={iconName}
          size={24}
          color={activeRouteName == idScreen ? '#EE7D46' : '#141414'}
          style={styles.drawerIcon}
        />
        <Text
          style={
            activeRouteName == idScreen
              ? styles.activatedDrawerLabel
              : styles.drawerLabel
          }>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }
  return (
    <>
      <View style={styles.drawerHeader}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
      </View>
      <View style={styles.drawerBody}>
        <View style={styles.drawerMenu}>
          <DrawerItem
            iconName="home"
            label="Home"
            onPress={() => navigation.navigate('Login')}
          />
          <DrawerItem
            iconName="users"
            label="Clientes"
            onPress={() => navigation.navigate('Customers')}
            idScreen="Customers"
          />
          <DrawerItem
            iconName="users"
            label="Clientes selecionados"
            onPress={() => navigation.navigate('SelectedCustomers')}
            idScreen="SelectedCustomers"
          />
          <DrawerItem
            iconName="package"
            label="Produtos"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>
    </>
  );
}
