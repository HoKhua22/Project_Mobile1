import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/Auth/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ForgotPass from './screens/Auth/ForgotPass';
import Splash from './screens/Auth/Splash';

const Stack = createNativeStackNavigator();

export default function App() {
  const [timePassed, setTimePassed] = useState(false);
  useEffect(() => {
    setTimeout(() => setTimePassed({ timePassed: true }), 10000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {timePassed ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPass}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
