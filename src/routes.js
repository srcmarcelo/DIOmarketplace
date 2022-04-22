import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from './components/Header';
import Catalog from './pages/Catalog';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: {backgroundColor: '#313746'},
          cardOverlayEnabled: false,
        }}
        initialRouteName="Catalog">
        <Stack.Screen
          name="Catalog"
          component={Catalog}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerTransparent: true,
            headerTitle: () => <Header />,
            headerLeft: () => {},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
