import React, { useState } from 'react';
import { AddTodoProps } from '../Interfaces/ITodo';


const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleAddClick = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div className='add-todo'>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

export default AddTodo;
