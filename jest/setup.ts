import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-gesture-handler', () => {
  return {
    GestureHandlerRootView: jest
      .fn()
      .mockImplementation(({children}) => children),
  };
});
