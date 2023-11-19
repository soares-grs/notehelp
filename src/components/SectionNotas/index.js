

import { Title, NotesContainer } from "./styles";

export default function SectionNotas({ children }) {
    return (
        <NotesContainer>
            <Title>
                NOTAS
                <NotesContainer>
                    {children}
                </NotesContainer>
            </Title>
        </NotesContainer>
    );
};