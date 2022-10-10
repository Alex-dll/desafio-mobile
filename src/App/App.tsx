import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/style/theme/theme';

import { Container } from './styles';
import Home from '../screens/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="dark" translucent />
        <Home />
      </Container>
    </ThemeProvider>
  );
}
