import { Circle, Card, Title, Time, Container } from "./styles";

import { FlatList } from "react-native";

export default function Cards({ notes }) {
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={({ item: note }) => (
          <Card>
            <Circle />
            <Title>{note?.title}</Title>
            <Time>{note?.date?.toString() ?? new Date().toString()}</Time>
          </Card>
      )}
    />
  );
}
