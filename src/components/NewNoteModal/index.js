import CustomModal from "../CustomModal";
import NoteForm from "../NoteForm";

import { Title} from "./style";

export default function NewNoteModal({ visible, onSave, onClose }) {
    return (
        <CustomModal 
        visible={visible}
        onClose={onClose}
        >   
            {/* icone */}
            <Title>Nova Nota</Title>
            <NoteForm 
                onClose={onClose}
                onSave={onSave}
            />
  
        </CustomModal>
    );
}