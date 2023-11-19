import { Input, View, IconContainer } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default function SearchInput({ onSearch }) {
  return (
    <View>
      <IconContainer>
        <Icon name="search" size={20} color="#252525" />
      </IconContainer>
      <Input onChangeText={onSearch} placeholder="Pesquisar" />
    </View>
  );
}
