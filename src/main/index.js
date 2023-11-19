import { Container, CardNotes, Card, CardEmpty, WarningEmptyNotes } from "./styles";
import { useState, useEffect } from "react";
import CustomHeader from "../components/Header";
import Cards from "../components/Card";
import AddNoteButton from "../components/AddNoteButton";
import NewNoteModal from "../components/NewNoteModal";
import SectionNotas from "../components/SectionNotas";
import SectionFixed from "../components/SectionFixed";
import { Text } from "react-native";
import ViewNoteModal from "../components/ViewNoteModal";


export default function Main() {
  const [isNewNoteModalVisible, setIsNewNoteModalVisible] = useState(false);
  const [isViewNoteModalVisible, setIsViewNoteModalVisible] = useState(false);
  const [originalNotes, setOriginalNotes] = useState([]);
  const [notes, setNotes] = useState(originalNotes);
  const [noteBeingViewed, setNoteBeingViewed] = useState();

  async function handleViewNote(note) {
    setNoteBeingViewed(note);
    setIsViewNoteModalVisible(true);
  }

  function handleCreateNote(note) {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
    setOriginalNotes(newNotes);
    setIsNewNoteModalVisible(false);
  }

  function filterArrayBySearch(array, searchQuery) {
    const lowerCaseSearch = searchQuery.toLowerCase();

    return array.filter(item => {
      const lowerCaseItemName = item.title.toLowerCase();

      return lowerCaseItemName.includes(lowerCaseSearch);
    });
  }

  function handleSearch(texto) {
    if (texto.trim() === "") {
      setNotes(originalNotes);
    } else {
      setNotes(filterArrayBySearch(originalNotes, texto));
    }
  }

  return (
    <Container>
      <CustomHeader onSearch={handleSearch} />
      <SectionFixed />
      <CardEmpty>
        {notes.length > 0 ? (
          <Cards onViewNote={note => handleViewNote(note)} notes={notes} />
        ) : (
          <WarningEmptyNotes>
            Não há notas a serem exibidas.
          </WarningEmptyNotes>

        )}
      </CardEmpty>
      <SectionNotas />
      <CardEmpty>
        {notes.length > 0 ? (
          <Cards onViewNote={note => handleViewNote(note)} notes={notes} />
        ) : (
            <WarningEmptyNotes>
              Não há notas a serem exibidas.
            </WarningEmptyNotes>
      
        )}
      </CardEmpty>
      <AddNoteButton onPress={() => setIsNewNoteModalVisible(true)} />
      <NewNoteModal
        visible={isNewNoteModalVisible}
        onClose={() => setIsNewNoteModalVisible(false)}
        onSave={handleCreateNote}
      />
      <ViewNoteModal
        visible={isViewNoteModalVisible}
        onClose={() => setIsViewNoteModalVisible(false)}
        noteBeginViewed={noteBeingViewed}
      />
    </Container>
  );
}
