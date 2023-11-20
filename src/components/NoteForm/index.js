import { Form, InputTitle, InputDesc, Button, Text, IconContainer } from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

import { useState } from "react";

let lastId = 0;


function NewId() {

    lastId += 1;


    return lastId;
}


export default function NoteForm({ onClose, onSave, note }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');



    return (
        <Form>
            <InputTitle
                placeholder="Título"
                value={title}
                placeholderTextColor="#666"
                onChangeText={setTitle}
            />

            <InputDesc
                placeholder="Descrição"
                placeholderTextColor="#666"
                value={description}
                onChangeText={setDescription}
            />

            <Button
                onPress={() => onSave({ title, description, date: new Date(), id: NewId()})}
                disabled={title.length === 0 || description.length === 0}
            >
                {/* icone */}
                <IconContainer>
                    <Icon name="plus" size={15} color="#fff" />
                </IconContainer>
                    <Text>Cadastrar</Text>
            </Button>
        </Form>
    );
}