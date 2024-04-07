import {StyleSheet} from 'react-native';

export const globalColors = {
  background: '#ffffff',
  danger: '#e71d36',
  dark: '#22223b',
  primary: '#7037eb',
  secondary: '#f72585',
  success: '#4cc9f0',
  tertiary: '#3a0ca3',
  warning: '#fca311',
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.background,
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: globalColors.background,
    fontSize: 18,
  },
});
