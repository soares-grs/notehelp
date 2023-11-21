import { Circle, Card, Title, Time, Container} from "./styles";

import { FlatList } from "react-native";

export default function Cards({ notes, onViewNote }) {
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
          </Container>
      )}
    />
  );
}
