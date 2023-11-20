import { useState } from "react";

export default function EditeNoteForm({note, onEdit}) {
    const [title, setTitle] = useState(note?.title ?? '');
    const [description, setDescription] = useState(note?.description ?? '');
    
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
                onPress={() => onEdit({ title, description, date: new Date(), id: note.id })}
                disabled={title.length === 0 || description.length === 0}
            >
                {/* icone */}
                <IconContainer>
                    <Icon name="edit" size={15} color="#fff" />
                </IconContainer>
                    <Text>Editar</Text>
            </Button>
        </Form>
    );
}
