import CustomModal from "../CustomModal";
import NoteForm from "../NoteForm";

import { Title } from "./style";

export default function NewNoteModal({ visible, onSave, onClose }) {
    return (
        <CustomModal 
        visible={visible}
        onClose={onClose}
        >
            <Title>Cadastrar nova nota</Title>
            <NoteForm onClose={onClose}/>
        </CustomModal>
    );
}