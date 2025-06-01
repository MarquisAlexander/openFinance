// App.js
import * as React from 'react';
import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login';
import Logo from '../assets/LogoTeddy.png';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Customers} from '../screens/Customers';
import Icon from '@react-native-vector-icons/feather';

const Drawer = createDrawerNavigator();

function Main2({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Tela 2</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}

function CustomDrawerContent({navigation}) {
  return (
    <>
      <View
        style={{
          backgroundColor: '#A3A3A3',
          alignItems: 'center',
          borderTopLeftRadius: 32,
        }}>
        <Image
          source={Logo}
          style={{width: 110, height: 55, marginTop: 65, marginBottom: 15}} // defina o tamanho desejado
          resizeMode="contain" // ou 'cover', 'stretch', etc.
        />
      </View>
      <View style={{backgroundColor: '#A3A3A3'}}>
        <View
          style={{
            backgroundColor: '#F5F5F5',
            borderTopStartRadius: 32,
            padding: 24,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              flexDirection: 'row',
              padding: 14,
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <Icon
              name="home"
              size={24}
              color="#141414"
              style={{marginRight: 20}}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#141414',
                fontWeight: 500,
              }}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              flexDirection: 'row',
              padding: 14,
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <Icon
              name="user"
              size={24}
              color="#141414"
              style={{marginRight: 20}}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#141414',
                fontWeight: 500,
              }}>
              Clientes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              flexDirection: 'row',
              padding: 14,
              alignItems: 'center',
              marginBottom: 12,
            }}>
            <Icon
              name="package"
              size={24}
              color="#141414"
              style={{marginRight: 20}}
            />
            <Text
              style={{
                fontSize: 16,
                color: '#141414',
                fontWeight: 500,
              }}>
              Produtos
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={({navigation}) => ({
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#fff',
          borderTopLeftRadius: 32,
          borderBottomLeftRadius: 32,
        },
        headerTitle: '',
        headerRight: () => (
          <>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Icon
                name="menu"
                size={30}
                color="#AAAAAA"
                style={{marginRight: 20}}
              />
            </TouchableOpacity>
          </>
        ),
        headerLeft: () => (
          <Image
            source={Logo}
            style={{width: 70, height: 34}} // defina o tamanho desejado
            resizeMode="contain" // ou 'cover', 'stretch', etc.
            style={{marginLeft: 20}}
          />
        ),
        headerStyle: {
          backgroundColor: '#f5f5f5',
          height: 70,
        },
      })}>
      <Drawer.Screen name="Home" component={Customers} />
      <Drawer.Screen name="Profile" component={Main2} />
    </Drawer.Navigator>
  );
}

const Stack = createNativeStackNavigator();

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
