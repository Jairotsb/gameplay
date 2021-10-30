import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme/theme';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="Home"
        component={Home}
      />

      <Screen
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
       <Screen
        name="AppointmentCreate"
        component={AppointmentCreate}
      />
    </Navigator>
  )
}