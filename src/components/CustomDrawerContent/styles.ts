import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeader: {
    backgroundColor: '#A3A3A3',
    alignItems: 'center',
    borderTopLeftRadius: 32,
  },
  logo: {
    width: 110,
    height: 55,
    marginTop: 65,
    marginBottom: 15,
  },
  drawerBody: {
    backgroundColor: '#A3A3A3',
  },
  drawerMenu: {
    backgroundColor: '#F5F5F5',
    borderTopStartRadius: 32,
    padding: 24,
  },
  drawerItem: {
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
  },
  activatedDrawerItem: {
    flexDirection: 'row',
    padding: 14,
    alignItems: 'center',
    marginBottom: 12,
    borderRightWidth: 2,
    borderRightColor: '#EE7D46',
  },
  drawerIcon: {
    marginRight: 20,
  },
  drawerLabel: {
    fontSize: 16,
    fontFamily: 'Inter_24pt-Medium',
    color: '#141414',
  },
  activatedDrawerLabel: {
    fontSize: 16,
    fontFamily: 'Inter_24pt-Medium',
    color: '#EE7D46',
  },
});
