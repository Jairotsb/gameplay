import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Background } from '../components/Background';
import { theme } from '../global/styles/theme/theme';



import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <Background>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </Background>
  );
}
