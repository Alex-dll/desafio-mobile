import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { Container } from './styles';

export default function App() {
  return (
    <Container>
      <Text>Welcome to BeMobile App</Text>
      <StatusBar style="auto" />
    </Container>
  );
}
