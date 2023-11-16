import CustomHeader from '../components/Header';
import CardContent from '../components/Card';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
        <CustomHeader />
        <CardContent />
    </Container>
  );
}

