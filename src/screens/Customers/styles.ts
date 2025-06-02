import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
  },
  headerCount: {
    fontSize: 16,
    fontWeight: '700',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '400',
  },
  headerCustomersPerPage: {
    marginBottom: 20,
    flexDirection: 'row',
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
    color: '#EC6724',
    fontWeight: '700',
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
    fontWeight: '700',
  },
  sheetContent: {
    flex: 1,
    paddingHorizontal: 32,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    paddingVertical: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    paddingBottom: 5,
  },
  input: {
    borderWidth: 2,
    height: 48,
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: '500',
    borderColor: '#AAAAAA',
    borderRadius: 8,
    width: '100%',
    marginBottom: 28,
    color: '#FFFFFF',
  },
  sheetButton: {
    backgroundColor: '#EB6625',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 8,
    width: '100%',
    marginBottom: 28,
  },
  inactiveSheetButton: {
    backgroundColor: '#878787',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 8,
    width: '100%',
    marginBottom: 28,
  },
  sheetButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  inactiveSheetButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#7A7A7A',
  },
});
