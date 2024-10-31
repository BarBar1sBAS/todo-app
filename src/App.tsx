import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import { TodoList } from './components/TodoList';
import { AddTaskDrawer } from './components/AddTaskDrawer';
import { DeleteConfirmation } from './components/DeleteConfirmation';
import { EditTaskModal } from './components/EditTaskModal';
import { useTasks } from './context/TaskContext';

const App: React.FC = () => {
  const { tasks, deleteTask, editTask } = useTasks();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [taskToEdit, setTaskToEdit] = useState<{ id: number, text: string } | null>(null);

  return (
    <div>
      <GlobalStyle />
      <h1>Список дел</h1>
      <button onClick={() => setDrawerOpen(true)}>Добавить задачу</button>
      <TodoList onEdit={(task) => setTaskToEdit(task)} onDelete={setTaskToDelete} />

      {isDrawerOpen && <AddTaskDrawer onClose={() => setDrawerOpen(false)} />}
      {taskToDelete !== null && (
        <DeleteConfirmation
          onConfirm={() => {
            deleteTask(taskToDelete);
            setTaskToDelete(null);
          }}
          onCancel={() => setTaskToDelete(null)}
        />
      )}
      {taskToEdit && (
        <EditTaskModal
          initialText={taskToEdit.text}
          onSave={(newText) => {
            editTask(taskToEdit.id, newText);
            setTaskToEdit(null);
          }}
          onCancel={() => setTaskToEdit(null)}
        />
      )}
    </div>
  );
};

export default App;