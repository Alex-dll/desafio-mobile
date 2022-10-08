import { StatusBar } from 'expo-status-bar';
import { useFonts, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/style/theme/theme';

import { Container, Text } from './styles';

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
