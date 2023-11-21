import { Container, CardNotes, Card, CardEmpty, WarningEmptyNotes,  Empty } from "./styles";
import { useState, useEffect } from "react";
import CustomHeader from "../components/Header";
import Cards from "../components/Card";
import AddNoteButton from "../components/AddNoteButton";
import NewNoteModal from "../components/NewNoteModal";
import SectionNotas from "../components/SectionNotas";
import SectionFixed from "../components/SectionFixed";
import { Alert, Text } from "react-native";
import ViewNoteModal from "../components/ViewNoteModal";
import { Time } from "../components/Card/styles";


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


  function handleRemoveNotes() {
    const indexToRemove = notes.findIndex(Cards);
    if (indexToRemove !== -1) {
      alert('Tarefa Excluida!')
      notes.splice(indexToRemove, 1);
      console.log(notes);
    } 
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
          <Empty>
          <WarningEmptyNotes>
            Não há notas a serem exibidas.
          </WarningEmptyNotes>
          </Empty>
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
        handleRemoveNotes={handleRemoveNotes}
      />
    </Container>
  );
}
