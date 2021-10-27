import React from 'react';

import {
  Image,
  View
} from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://icon-library.com/images/league-of-legends-icon-png/league-of-legends-icon-png-23.jpg'
  return (
    <Image
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}