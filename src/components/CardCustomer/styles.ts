import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 4,
  },
  name: {
    fontSize: 16,
    fontFamily: 'Inter_24pt-Bold',
  },
  detail: {
    fontSize: 14,
    fontFamily: 'Inter_24pt-Regular',
    paddingVertical: 5,
  },
  actions: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 15,
    borderRadius: 4,
  },
});
