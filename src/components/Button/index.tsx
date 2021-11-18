import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  Text,
} from 'react-native';

import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
  negativeButton: boolean
}

export function Button({ negativeButton, title, ...rest }: ButtonProps) {
  return (
    <RectButton
      style={negativeButton ? styles.negativeButton : styles.container }
      {...rest}
    >
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}