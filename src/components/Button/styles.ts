import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
  },

  iconWrapper: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderEndColor: theme.colors.line
  },
  icon: {
    width: 24,
    height: 18
  },
  negativeButton: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.secondary30,
    borderWidth: 3, 
    borderColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  }
});