import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Roboto_500Medium,
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/style/theme/theme';

import { Container } from './styles';
import Typography from '../components/Typography';
import Icon from '../components/Icon';

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
        <Typography fontStyle="h1" color="black">
          Welcome to BeMobile App
        </Typography>
        <Icon icon="search" size={17} activeColor="black" />
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
