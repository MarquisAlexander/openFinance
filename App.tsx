import './gesture-handler';
import React from 'react';
import {useColorScheme, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import StackNavigation from './src/routes/StackNavigation';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  return (
    <View style={backgroundStyle}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StackNavigation />
      </GestureHandlerRootView>
    </View>
  );
}

export default App;
