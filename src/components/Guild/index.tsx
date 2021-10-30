import { Feather } from '@expo/vector-icons';
import React from 'react';

import {
  TouchableOpacity,
  View,
  TouchableOpacityProps,
  Text
} from 'react-native';
import { theme } from '../../global/styles/theme/theme';
import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';

export type GuildProps = {
  id: string,
  name: string,
  icon: string | null;
  owner: boolean;
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <GuildIcon />
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>
            {data.name}
          </Text>
          <Text style={styles.type}>
            {data.owner ? 'Administrador' : 'Convidado'}
          </Text>
        </View>
      </View>
      <Feather
        name="chevron-right"
        color={theme.colors.heading}
        size={24}
      />

    </TouchableOpacity>
  );
}