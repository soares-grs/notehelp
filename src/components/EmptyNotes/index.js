import { Circle, Card, Title, Time, CardContainer } from "./styles"

export default function EmptyNotes() {
    return (
        <CardContainer>
            <Card>
                <Circle />
                <Title>Não há notas</Title>
            </Card>
        </CardContainer>
    )
}