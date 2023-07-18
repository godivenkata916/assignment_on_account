/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';




function App() {

  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>            
  );
}



export default App;
