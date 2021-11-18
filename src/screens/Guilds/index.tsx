import React, { useEffect, useState } from 'react';

import {
  FlatList,
  View
} from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';

import { styles } from './styles';

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds(){
    const res = await api.get('/users/@me/guilds');

    setGuilds(res.data);
    setLoading(false);

  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Load />
        :
        <FlatList
          data={guilds}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 64 }}
          ListHeaderComponent={() => <ListDivider isCentered />}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          renderItem={({ item }) => (
            <Guild
              data={item}
              onPress={() => handleGuildSelected(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
        />
      }
    </View>
  );
}