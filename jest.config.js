module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-gesture-handler)/)',
    'node_modules/(?!(react-native|@react-navigation|@react-native|react-native-gesture-handler)/)',
    'node_modules/(?!(react-native|@react-navigation|@react-native|react-native-gesture-handler|@react-native-vector-icons)/)',
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg|ttf|otf|woff|woff2|eot)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
};
