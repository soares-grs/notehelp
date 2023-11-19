import { Form, InputTitle, InputDesc,Button, Text } from "./styles";

import { useState } from "react";

export default function NoteForm({ onClose, onSave, note }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    function gerarIdAleatorio() {
        return Math.floor(Math.random() * 10000);
    }

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
                onPress={() => onSave({ title, description, date: new Date(), id: gerarIdAleatorio()})}
                disabled={title.length === 0 || description.length === 0}
            >
                {/* icone */}
                <Text>Nova Nota</Text>
            </Button>
        </Form>
    );
}