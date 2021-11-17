import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import theme from './config/theme';
import store from './store/store';
import RootNavigator from './routers';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={0}>
            <NavigationContainer>
              <RootNavigator />
            </NavigationContainer>
          </KeyboardAvoidingView>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
