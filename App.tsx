/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import HomePage from './src/features/home/home';
import {  NavigationContainer } from '@react-navigation/native';
import { CustomDarkTheme, CustomLightTheme } from './src/ui/components/theme/app_theme';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer theme={ isDarkMode ? CustomDarkTheme : CustomLightTheme} >
      <SafeAreaProvider>
        <HomePage/>
      </SafeAreaProvider>
    </NavigationContainer >
    
  );
}


export default App;
