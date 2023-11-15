import CustomHeader from '../components/Header';
import { Container } from './styles';
import AddNoteButton from '../components/AddNoteButton';
import { useState } from 'react';
import NewNoteModal from '../components/NewNoteModal';

export default function Main() {

  const [isNewNoteModalVisible, setIsNewNoteModalVisible] = useState(false);


  return (
    <Container>
        <CustomHeader />
        <AddNoteButton onPress={() => setIsNewNoteModalVisible(true)} />
        <NewNoteModal
          visible={isNewNoteModalVisible}
          // onClose={() => setIsNewNoteModalVisible(false)}
          // onSave={handleCreateNote}
      />
    </Container>
  );
}

