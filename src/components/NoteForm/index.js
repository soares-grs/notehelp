import { Form, InputTitle, InputDesc,Button, Text } from "./styles";

import { useState } from "react";

export default function NoteForm({ onClose }) {

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
                onPress={onClose}
                disabled={title.length === 0 || description.length === 0}
            >
                {/* icone */}
                <Text>Nova Nota</Text>
            </Button>
        </Form>
    );
}