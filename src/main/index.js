import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { ContainerExample } from './styles';


export default function Main() {
  return (
    <ContainerExample>
      <Text>Main!</Text>
      <StatusBar style="auto" />
    </ContainerExample>
  );
}

