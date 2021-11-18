import React, { useState } from 'react';

import {
  View,
  Text,
  Alert
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/auth';
import { Avatar } from '../Avatar';
import { Button } from '../Button';
import { ModalSign } from '../ModalSign';

import { styles } from './styles';

export function Profile() {
  const { user, signOut } = useAuth();
  const [openGuildsModal, setOpenGuildsModal] = useState(false);

  function handleOpenGuildsModal() {
    setOpenGuildsModal(true);
  }
  function handleCloseModal() {
    setOpenGuildsModal(false);
  }

  function handleSignOut() {
    signOut();
    setOpenGuildsModal(false);
  }

  return (
    <View style={styles.container}>
      <RectButton onPress={handleOpenGuildsModal}>
        <Avatar urlImage={user.avatar} />
      </RectButton>
      <View>

        <View style={styles.user}>
          <Text style={styles.greeting}>Olá,</Text>
          <Text style={styles.username}>
            {user.firstName}
          </Text>
        </View>
        <Text style={styles.message}>
          Hoje é dia de vitória!
        </Text>
        <ModalSign closeModal={handleCloseModal} visible={openGuildsModal}>
          <Text style={styles.modalText}>Deseja Sair do GamePlay?</Text>
          <View style={styles.buttonDivider}>
            <Button
              title="Sim"
              onPress={handleSignOut}
              negativeButton={false}
            />
          </View>
          <View style={styles.buttonDivider}>
            <Button
              title="Não"
              onPress={handleCloseModal}
              negativeButton={true}
             />
          </View>
        </ModalSign>
      </View>
    </View>
  );
}