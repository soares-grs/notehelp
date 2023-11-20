import CustomModal from "../CustomModal";
import { Title, Description, Button, Text, ContainerButton} from "./styles";



export default function ViewNoteModal({ visible, onClose, noteBeginViewed, handleRemoveNotes}) {
    return (
        <CustomModal 
            visible={visible}
            onClose={onClose}
            noteBeginViewed={noteBeginViewed}
        >
            <Title>{noteBeginViewed?.title}</Title>
            <Description>{noteBeginViewed?.description}</Description>
            <Button onPress={handleRemoveNotes}>
                <Text>Excluir</Text>
            </Button>
        </CustomModal> 
    );
}