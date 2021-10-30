import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: 48, 
    height: 48, 
    backgroundColor: theme.colors.secondary40, 
    color: theme.colors.heading, 
    fontFamily: theme.fonts.text400, 
    fontSize: 13, 
    marginRight: 4, 
    textAlign: 'center'
  }
});