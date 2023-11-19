import { TitleFx, FixContainer, NotesContainer } from "./styles";

export default function SectionFixed({ children }) {
    return (
        <FixContainer>
            <TitleFx>
                FIXADOS
            </TitleFx>
            {/* <NotesContainer>
                {children}
            </NotesContainer> */}
        </FixContainer>
    );
};