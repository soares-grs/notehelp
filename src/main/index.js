import CustomHeader from '../components/Header';
import { Container } from './styles';
import AddNoteButton from '../components/AddNoteButton';

export default function Main() {
  return (
    <Container>
        <CustomHeader />
        <AddNoteButton/>
    </Container>
  );
}

