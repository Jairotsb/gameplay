import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

import {
  View,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { theme } from '../../global/styles/theme/theme';


import { styles } from './styles';


export function ButtonAdd({...rest}: RectButtonProps){
  return ( 
  <RectButton
    style={styles.container}
    {...rest}
  >
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24} 
      />
    
  </RectButton>
  );
}   