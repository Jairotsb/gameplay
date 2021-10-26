import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';


import { theme } from '../../global/styles/theme/theme';

type Props = {
  children: ReactNode;
}
import { styles } from './styles';

export function Background({children}: Props){
    const {secondary80, secondary100} = theme.colors;

  return (
    <LinearGradient
      style={styles.container}
      colors={[secondary80, secondary100]}

    >
      { children }

    </LinearGradient>
  );
}