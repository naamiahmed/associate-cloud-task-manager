import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    if (tasks.length === 0) {
        return (
            <div className="empty-state">
                <div className="empty-icon">📝</div>
                <p>No tasks yet. Add one above to get started!</p>
                <style>{`
          .empty-state {
            text-align: center;
            padding: 4rem 2rem;
            color: var(--text-muted);
            background: var(--card-bg);
            border-radius: var(--radius);
            margin: 0 auto;
            max-width: 1000px;
            border: 2px dashed var(--border);
          }
          .empty-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
          }
        `}</style>
            </div>
        );
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                />
            ))}
            <style>{`
        .task-list {
          list-style: none;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 1rem;
        }
      `}</style>
        </ul>
    );
};

export default TaskList;
