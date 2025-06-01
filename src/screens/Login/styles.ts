import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 4,
    fontSize: 24,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#EC6724',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
