import { Container, PlusIcon } from "./styles";

export default function AddNoteButton({onPress, disabled}) {
    return (
        <Container 
            disabled={disabled} 
            onPress={onPress}
        >
            <PlusIcon>+</PlusIcon>
        </Container>
    );
}