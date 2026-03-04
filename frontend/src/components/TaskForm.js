import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAddTask(text);
        setText('');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="What needs to be done?"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="task-input"
            />
            <button type="submit" className="add-button">
                Add Task
            </button>
            <style>{`
        .task-form {
          display: flex;
          gap: 0.75rem;
          max-width: 1000px;
          margin: 0 auto 2rem;
          padding: 0 1rem;
        }
        .task-input {
          flex: 1;
          padding: 0.875rem 1.25rem;
          border-radius: var(--radius);
          border: 2px solid var(--border);
          outline: none;
          transition: var(--transition);
          font-size: 1rem;
          background: var(--card-bg);
          box-shadow: var(--shadow);
        }
        .task-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
        }
        .add-button {
          padding: 0.875rem 1.75rem;
          background: var(--primary);
          color: white;
          border-radius: var(--radius);
          font-weight: 600;
          transition: var(--transition);
          box-shadow: var(--shadow);
        }
        .add-button:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
          box-shadow: var(--shadow-lg);
        }
        .add-button:active {
          transform: translateY(0);
        }
      `}</style>
        </form>
    );
};

export default TaskForm;
