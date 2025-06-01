import * as React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from '@react-native-vector-icons/feather';

import {Login} from '../screens/Login';
import {Customers} from '../screens/Customers';
import Logo from '../assets/LogoTeddy.png';
import {CustomDrawerContent} from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Main2({navigation}) {
  return (
    <View style={styles.centered}>
      <Text>Tela 2</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

function MyDrawer() {
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
      <Drawer.Screen name="Profile" component={Main2} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="Main" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
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
