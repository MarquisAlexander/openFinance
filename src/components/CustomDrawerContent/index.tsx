import Icon from '@react-native-vector-icons/feather';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Logo from '../../assets/LogoTeddy.png';

export function CustomDrawerContent({navigation}) {
  function DrawerItem({iconName, label, onPress}) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.drawerItem}>
        <Icon
          name={iconName}
          size={24}
          color="#141414"
          style={styles.drawerIcon}
        />
        <Text style={styles.drawerLabel}>{label}</Text>
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
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            iconName="user"
            label="Clientes"
            onPress={() => navigation.navigate('Home')}
          />
          <DrawerItem
            iconName="users"
            label="Clientes selecionados"
            onPress={() => navigation.navigate('SelectedCustomers')}
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
