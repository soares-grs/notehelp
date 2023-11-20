import CustomModal from "../CustomModal";
import { Title, Description } from "./styles";


export default function ViewNoteModal({ visible, onClose, noteBeginViewed }) {
    return (
        <CustomModal 
            visible={visible}
            onClose={onClose}
            noteBeginViewed={noteBeginViewed}
        >
            <Title>{noteBeginViewed?.title}</Title>
            <Description>{noteBeginViewed?.description}</Description>
        </CustomModal> 
    );
}
