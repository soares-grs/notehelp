import { Modal } from "react-native";
import { ModalBody, Overlay } from "./styles";

export default function CustomModal({ children, visible, onClose }) {
    return (
        <Modal
            visible={visible}
            onRequestClose={onClose}
            animationType='fade'
            transparent
            statusBarTranslucent
        >
            <Overlay onPress={onClose} behavior='padding'>
                <ModalBody>
                    {children}
                </ModalBody>
            </Overlay>
        </Modal>
    );
}