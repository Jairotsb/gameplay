import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Background } from '../components/Background';
import { useAuth } from '../hooks/auth';
import { SignIn } from '../screens/SignIn';
//import { theme } from '../global/styles/theme/theme';



import { AppRoutes } from './app.routes';

export function Routes() {
  const { user } = useAuth();
  return (
    <Background>
      <NavigationContainer>
        {user.id ? <AppRoutes /> : <SignIn />}
      </NavigationContainer>
    </Background>
  );
}
