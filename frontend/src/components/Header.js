import React from 'react';

const Header = ({ totalTasks, completedTasks }) => {
  return (
    <header className="header glass">
      <div className="header-content">
        <h1>Task Manager</h1>
        <div className="stats">
          <span className="stat-item">
            <strong>{totalTasks}</strong> Total
          </span>
          <span className="stat-item">
            <strong>{completedTasks}</strong> Completed
          </span>
        </div>
      </div>
      <style>{`
        .header {
          padding: 1.5rem 2rem;
          margin-bottom: 2rem;
          border-radius: var(--radius);
          box-shadow: var(--shadow);
          position: sticky;
          top: 1rem;
          z-index: 10;
        }
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, var(--primary), #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stats {
          display: flex;
          gap: 1.5rem;
        }
        .stat-item {
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        .stat-item strong {
          color: var(--primary);
          font-size: 1.125rem;
          margin-right: 0.25rem;
        }
        @media (max-width: 600px) {
          .header-content {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
