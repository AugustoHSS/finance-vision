import { ModalOverlay, ModalContent } from "./AddServiceModal.styled";

export default function AddServiceModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2>Add Service</h2>
        <p>Aqui vai o formulário futuramente.</p>
        <button onClick={onClose}>Fechar</button>
      </ModalContent>
    </ModalOverlay>
  );
}
