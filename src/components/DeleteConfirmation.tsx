import React from 'react';
import styled from 'styled-components';

interface DeleteConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({ onConfirm, onCancel }) => (
  <Modal>
    <p>Вы уверены, что хотите удалить эту задачу?</p>
    <ButtonGroup>
      <button onClick={onConfirm}>Да</button>
      <button onClick={onCancel}>Отмена</button>
    </ButtonGroup>
  </Modal>
);

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:first-child {
      background-color: #d9534f;
      color: white;

      &:hover {
        background-color: #c9302c;
      }
    }

    &:last-child {
      background-color: #6c757d;
      color: white;

      &:hover {
        background-color: #5a6268;
      }
    }
  }
`;