import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: 95, 
    backgroundColor: theme.colors.secondary40, 
    color: theme.colors.heading, 
    fontFamily: theme.fonts.text400, 
    fontSize: 18, 
    marginRight: 4, 
    textAlign: 'center',
    borderRadius: 4, 
  }
});