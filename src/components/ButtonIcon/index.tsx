import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import {
  Image,
  Text,
  View
} from 'react-native';

import DiscordSvg from '../../assets/discord.svg';
import { styles } from './styles';

type ButtonProps = RectButtonProps & {
  title: string;
}

export function ButtonIcon({ title, ...rest }: ButtonProps) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <DiscordSvg style={styles.icon}/>
      </View>
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}