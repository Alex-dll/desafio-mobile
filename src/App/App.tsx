import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Container } from './styles';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/style/theme/theme';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Text>Welcome to BeMobile App</Text>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
