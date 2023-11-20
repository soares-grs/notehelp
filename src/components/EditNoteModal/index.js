import CustomModal from "../CustomModal";
import EditNoteForm from "../EditNoteForm";
import { Title} from "./style";

export default function EditNoteModal({ visible, onEdit, onClose, note }) {
    return (
        <CustomModal 
        visible={visible}
        onClose={onClose}
        note={note}
        >   
            {/* icone */}
            <Title>Editar Nota</Title>
            <EditNoteForm 
                onClose={onClose}
                onEdit={onEdit}
                note={note}
            />
  
        </CustomModal>
    );
}