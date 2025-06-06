import './gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider} from '@gorhom/portal';

import StackNavigation from './src/routes/StackNavigation';
import {CustomerProvider} from './src/context/CustomerContext';

function App(): React.JSX.Element {
  return (
    <View style={{flex: 1}}>
      <CustomerProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <PortalProvider>
            <StackNavigation />
          </PortalProvider>
        </GestureHandlerRootView>
      </CustomerProvider>
    </View>
  );
}

export default App;
