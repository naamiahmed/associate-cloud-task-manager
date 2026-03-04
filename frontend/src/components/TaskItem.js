import React from 'react';

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <button
          className="checkbox"
          onClick={() => onToggle(task.id)}
          aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {task.completed && (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </button>
        <span className="task-text">{task.title}</span>
      </div>
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
        </svg>
      </button>
      <style>{`
        .task-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: var(--card-bg);
          border-radius: var(--radius);
          margin-bottom: 0.75rem;
          box-shadow: var(--shadow);
          transition: var(--transition);
          border: 1px solid var(--border);
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .task-item:hover {
          transform: translateX(4px);
          border-color: var(--primary);
        }
        .task-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }
        .checkbox {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition);
          color: white;
        }
        .task-item.completed .checkbox {
          background: var(--success);
          border-color: var(--success);
        }
        .checkbox svg {
          width: 14px;
          height: 14px;
        }
        .task-text {
          font-size: 1rem;
          color: var(--text-main);
          transition: var(--transition);
        }
        .task-item.completed .task-text {
          color: var(--text-muted);
          text-decoration: line-through;
        }
        .delete-button {
          color: var(--text-muted);
          padding: 0.5rem;
          border-radius: 6px;
          transition: var(--transition);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .delete-button:hover {
          color: var(--danger);
          background: #fee2e2;
        }
        .delete-button svg {
          width: 20px;
          height: 20px;
        }
      `}</style>
    </li>
  );
};

export default TaskItem;
