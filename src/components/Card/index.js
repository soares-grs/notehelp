import { Circle, Card, Title, Time, Container, IconContainer} from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

import { FlatList } from "react-native";

export default function Cards({ notes, onViewNote, onEditNote }) {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item: note }) => (
        <Container>
          <Card onPress={() => { onViewNote(note) }}>
            <Circle />
            <Title>{note?.title}</Title>
            <Time>{note?.date?.toString() ?? new Date().toString()}</Time>
          </Card>
            <IconContainer>
              <Icon name="plus" size={15} color="#252525" />
            </IconContainer>
          </Container>
      )}
    />
  );
}
