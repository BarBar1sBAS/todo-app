import React, { useState } from 'react';
import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';

interface AddTaskDrawerProps {
  onClose: () => void;
}

export const AddTaskDrawer: React.FC<AddTaskDrawerProps> = ({ onClose }) => {
  const [text, setText] = useState('');
  const { addTask } = useTasks();

  const handleAdd = () => {
    if (text.includes('!')) {
      alert('Задача не должна содержать символ "!"');
    } else {
      addTask(text);
      setText('');
      onClose();
    }
  };

  return (
    <Drawer>
      <h2>Добавить задачу</h2>
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleAdd} disabled={!text}>Добавить</button>
      <button onClick={onClose}>Закрыть</button>
    </Drawer>
  );
};

const Drawer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: white;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
`;