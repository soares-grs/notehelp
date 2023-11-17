import { Container } from './styles';
import { useState } from 'react';
import CustomHeader from '../components/Header';
import CardContent from '../components/Card';
import AddNoteButton from '../components/AddNoteButton';
import NewNoteModal from '../components/NewNoteModal';
import SectionNotas from '../components/SectionNotas';
import SectionFixed from '../components/SectionFixed';


export default function Main() {

  const [isNewNoteModalVisible, setIsNewNoteModalVisible] = useState(false);


  return (
    <Container>
      <CustomHeader />
      <SectionFixed />
      <CardContent />
      <SectionNotas />
      <AddNoteButton onPress={() => setIsNewNoteModalVisible(true)} />
      <NewNoteModal
        visible={isNewNoteModalVisible}
        onClose={() => setIsNewNoteModalVisible(false)}
      // onSave={handleCreateNote}
      />
    </Container>
  );
}

