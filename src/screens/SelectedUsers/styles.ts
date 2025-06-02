import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    marginVertical: 20,
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
  createButton: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#EC6724',
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  createButtonText: {
    fontSize: 14,
    fontFamily: 'Inter_24pt-Bold',
    color: '#EC6724',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  pageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    height: 35,
    width: 35,
    marginHorizontal: 5,
  },
  pageButtonActive: {
    backgroundColor: '#EC6724',
  },
  pageText: {
    fontSize: 14,
    fontFamily: 'Inter_24pt-Bold',
  },
});
