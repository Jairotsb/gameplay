import { Fontisto } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';

import {
  FlatList,
  ImageBackground,
  Text,
  Alert,
  View,
  Platform,
  Share
} from 'react-native';
import * as Linking from 'expo-linking'
import { BorderlessButton } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { theme } from '../../global/styles/theme/theme';
import bannerImg from '../../assets/banner.png';

import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { Member, MemberProps } from '../../components/Member';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';
import { AppointmentProps } from '../../components/Appointment';
import { api } from '../../services/api';
import { Load } from '../../components/Load';

type Params = {
  guildSelected: AppointmentProps
}

type GuildWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
}


export function AppointmentDetails() {
  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { guildSelected } = route.params as Params;

  async function fetchGuildInfo() {
    try {
      const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
      setWidget(response.data);

    } catch (error) {
      Alert.alert('Verifique as configurações do servidor. Será qu o widget está habilitado??');

    } finally {
      setLoading(false);
    }

  }

  function handleShareInvitation() {
    const message = Platform.OS === 'ios' ?
      `Junte-se a ${guildSelected.guild.name}` :
      widget.instant_invite === null ? `Junte-se a ${guildSelected.guild.name}` : `Junte-se nesta partida super legal e dê seu GAMEPLAY: ${widget.instant_invite}`;
    //console.log(widget.instant_invite);

    Share.share({
      message,
      url: widget.instant_invite
    });
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  useEffect(() => {
    fetchGuildInfo();
  }, []);
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton onPress={handleShareInvitation}>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={bannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>{guildSelected.guild.name}</Text>
          <Text style={styles.subtitle}>
            {guildSelected.description}
          </Text>
        </View>
      </ImageBackground>

      {loading ? <Load /> :
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members.length}`}
          />
          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Member
                data={item}
              />
            )}
            ItemSeparatorComponent={() => <ListDivider isCentered />}
            style={styles.members}
          />
        </>
      }

      {guildSelected.guild.owner &&
        <View style={styles.footer}>
          <ButtonIcon
            onPress={handleOpenGuild}
            title="Entrar na partida"
          />
        </View>
      }
    </Background>
  );
}