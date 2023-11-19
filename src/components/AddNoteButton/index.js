import { Container, PlusIcon, Circle } from "./styles";

export default function AddNoteButton({ onPress, disabled }) {
    return (
        <Container
            disabled={disabled}
            onPress={onPress}
        >
            <Circle>
                <PlusIcon>+</PlusIcon>
            </Circle>
        </Container>
    );
}