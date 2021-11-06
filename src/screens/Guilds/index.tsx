import React from 'react';

import {
  FlatList,
  View
} from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },
    {
      id: '2',
      name: 'Vitoriosos',
      icon: null,
      owner: true
    },
    {
      id: '3',
      name: 'Vitoriosos',
      icon: null,
      owner: true
    },
    {
      id: '4',
      name: 'Vitoriosos',
      icon: null,
      owner: true
    },
    {
      id: '5',
      name: 'Vitoriosos',
      icon: null,
      owner: true
    },
    {
      id: '6',
      name: 'Vitoriosos',
      icon: null,
      owner: true
    },

    {
      id: '7',
      name: 'Vitoriosos',
      icon: null,
      owner: true
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingBottom: 69, paddingTop: 64}}
        ListHeaderComponent={() => <ListDivider isCentered/>}
        ItemSeparatorComponent={() => <ListDivider isCentered/>}
        renderItem={({ item }) => (
          <Guild
            data={item}
            onPress={() => handleGuildSelected(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
      />

    </View>
  );
}