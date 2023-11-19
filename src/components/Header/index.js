import { HeaderContainer, Title } from "./styles"
import SearchInput from "../SearchInput"
export default function CustomHeader({ onSearch }) {
    return (
        <HeaderContainer>
            <Title>NoteHelp</Title>
            <SearchInput
                onSearch={onSearch}
            />
        </HeaderContainer>
    )
};