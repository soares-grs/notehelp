import { Circle, Card, Title, Time, CardContainer } from "./styles"
export default function CardContent() {
    return (
        <CardContainer>
            <Card>
                <Circle />
                <Title>Titulo</Title>
                <Time>13/12/2002</Time>
            </Card>
        </CardContainer>
    )
};
