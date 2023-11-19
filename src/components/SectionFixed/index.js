import { TitleFx, FixContainer, NotesContainer } from "./styles";

export default function SectionFixed({ children }) {
    return (
        <FixContainer>
            <TitleFx>
                FIXADOS
            <NotesContainer>
                {children}
            </NotesContainer>
            </TitleFx>
        </FixContainer>
    );
};