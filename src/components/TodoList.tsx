import React from 'react';
import styled from 'styled-components';
import { useTasks } from '../context/TaskContext';

interface TodoListProps {
  onEdit: (task: { id: number, text: string }) => void;
  onDelete: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ onEdit, onDelete }) => {
  const { tasks } = useTasks();
  
  return (
    <List>
      {tasks.map(task => (
        <ListItem key={task.id}>
          {task.text}
          <Icons>
            <EditIcon onClick={() => onEdit({ id: task.id, text: task.text })}>✏️</EditIcon>
            <DeleteIcon onClick={() => onDelete(task.id)}>🗑️</DeleteIcon>
          </Icons>
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Icons = styled.div`
  display: flex;
  gap: 10px;
`;

const EditIcon = styled.span`
  cursor: pointer;
`;

const DeleteIcon = styled.span`
  cursor: pointer;
`;