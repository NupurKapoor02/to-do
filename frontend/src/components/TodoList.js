import React, { useState } from 'react';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [editedDueDate, setEditedDueDate] = useState('');
  const [editedDueTime, setEditedDueTime] = useState('');

  const handleEdit = (todo) => {
    setEditingTodoId(todo._id);
    setEditedTask(todo.task);
    setEditedDueDate(todo.dueDate.split('T')[0]);
    setEditedDueTime(todo.dueTime);
  };

  const handleSave = async (todoId) => {
    await onEdit(todoId, { task: editedTask, dueDate: editedDueDate, dueTime: editedDueTime });
    setEditingTodoId(null); 
  };

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div key={todo._id} className="todo-item">
          {editingTodoId === todo._id ? (
            <div>
              <input
                type="text"
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
              />
              <input
                type="date"
                value={editedDueDate}
                onChange={(e) => setEditedDueDate(e.target.value)}
              />
              <input
                type="time"
                value={editedDueTime}
                onChange={(e) => setEditedDueTime(e.target.value)}
              />
              <button onClick={() => handleSave(todo._id)}>Save</button>
              <button onClick={() => setEditingTodoId(null)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h4 className={todo.completed ? 'completed' : ''}>{todo.task}</h4>
              <p>Date: {new Date(todo.dueDate).toLocaleDateString()}</p>
              <p>Time: {todo.dueTime}</p>
              <button onClick={() => onToggle(todo._id)}>
                {todo.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => onDelete(todo._id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
