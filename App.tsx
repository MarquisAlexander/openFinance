import './gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import StackNavigation from './src/routes/StackNavigation';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <StackNavigation />
      </GestureHandlerRootView>
    </View>
  );
}

export default App;
