import { Form, Input, Button, Text } from "./styles";

import { useState } from "react";

export default function NoteForm({ onClose }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <Form>
            <Input
                placeholder="Título"
                value={title}
                placeholderTextColor="#666"
                onChangeText={setTitle}
            />

            <Input
                placeholder="Descrição"
                placeholderTextColor="#666"
                value={description}
                onChangeText={setDescription}
            />

            <Button 
                onPress={onClose}
                disabled={title.length === 0 || description.length === 0}
            >
                <Text>Cadastrar</Text>
            </Button>
        </Form>
    );
}