import { HeaderContainer, Title } from "./styles"
import SearchInput from "../SearchInput"
export default function CustomHeader() {
    return (
        <HeaderContainer>
            <Title>NoteHelp</Title>
            <SearchInput
                placeholder="Informe o lembrete"
            />
        </HeaderContainer>
    )
};