import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  user: {
    flexDirection: 'row',
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  buttonDivider: {
    marginVertical: 10,
    marginHorizontal: 40,
    //marginBottom: 56,
  },
  modalText: {
    marginBottom: 20, 
    color: theme.colors.heading, 
    fontSize: 18, 
    marginTop: 20,
    textAlign: 'center',
  }
});