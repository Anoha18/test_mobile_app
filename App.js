import { SplashScreen } from 'expo';
import React from 'react';
import { AppNavigation } from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';

import store from './src/store';

// Instruct SplashScreen not to hide yet, we want to do this manually
SplashScreen.preventAutoHide();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

