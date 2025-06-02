import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
  },
  headerCount: {
    fontSize: 16,
    fontFamily: 'Inter_24pt-Bold',
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Inter_24pt-Regular',
  },
  headerCustomersPerPage: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  sheetContent: {
    flex: 1,
    paddingHorizontal: 32,
  },
  textNumber: {
    fontFamily: 'Inter_24pt-Regular',
    fontSize: 24,
    borderBottomWidth: 2,
    borderBottomColor: '#F5F5F5',
    textAlign: 'center',
    width: '100%',
    paddingVertical: 5,
  },
});
