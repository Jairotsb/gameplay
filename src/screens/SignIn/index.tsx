import React from 'react';

import {
  Text,
  View,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { theme } from '../../global/styles/theme/theme';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import { styles } from './styles';


export function SignIn() {

  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try { 
      await signIn();
    } catch (error) {
        Alert.alert(`Error: ${error}`);
    }
    
  }
  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'}
            e organize suas {'\n'}
            jogatinas
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games. {`\n`}
            Favoritos com seus amigos.
          </Text>

        {loading ?  
          <ActivityIndicator color={theme.colors.primary}/>
          : <ButtonIcon
          title="Entrar com o discord"
          onPress={handleSignIn}
          activeOpacity={0.9}
          />

        }
        </View>
      </View>
    </Background>
  );
}