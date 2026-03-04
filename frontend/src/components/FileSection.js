import React, { useState, useEffect } from 'react';

const FileSection = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    const baseUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${baseUrl}/files/`);
      if (!response.ok) throw new Error('Failed to fetch files');
      const data = await response.json();
      setFiles(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', file.name);

    setUploading(true);
    setError(null);

    try {
      const baseUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${baseUrl}/files//`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      await fetchFiles();
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      e.target.value = ''; // Reset input
    }
  };

  const handleDelete = async (id) => {
    const baseUrl = process.env.REACT_APP_API_URL;
    try {
      const response = await fetch(`${baseUrl}/files/${id}/`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Delete failed');
      fetchFiles();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="file-section">
      <h3>📁 Documents & Attachments (AWS S3)</h3>

      <div className="upload-box">
        <label className={`upload-label ${uploading ? 'uploading' : ''}`}>
          {uploading ? 'Uploading...' : 'Click to Upload or Drag File'}
          <input
            type="file"
            onChange={handleUpload}
            disabled={uploading}
            hidden
          />
        </label>
      </div>

      {error && <div className="error-message">{error}</div>}

      <div className="file-list">
        {files.length === 0 ? (
          <p className="empty-text">No files uploaded yet.</p>
        ) : (
          files.map(file => (
            <div key={file.id} className="file-item">
              <div className="file-info">
                <span className="file-name">{file.name}</span>
                <span className="file-date">{new Date(file.uploaded_at).toLocaleDateString()}</span>
              </div>
              <div className="file-actions">
                <a
                  href={file.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-btn"
                  title="Download from S3"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v4m4-10l5 5 5-5m-5 5V3" />
                  </svg>
                </a>
                <button
                  onClick={() => handleDelete(file.id)}
                  className="delete-file-btn"
                  title="Delete"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <style>{`
        .file-section {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 2px dashed var(--border);
        }
        .file-section h3 {
          margin-bottom: 1.5rem;
          color: var(--text-main);
          font-size: 1.25rem;
        }
        .upload-box {
          margin-bottom: 1.5rem;
        }
        .upload-label {
          display: block;
          padding: 2rem;
          border: 2px dashed var(--primary);
          border-radius: var(--radius);
          text-align: center;
          cursor: pointer;
          transition: var(--transition);
          background: rgba(99, 102, 241, 0.05);
          color: var(--primary);
          font-weight: 500;
        }
        .upload-label:hover {
          background: rgba(99, 102, 241, 0.1);
          transform: translateY(-2px);
        }
        .upload-label.uploading {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .file-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .file-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: var(--transition);
        }
        .file-item:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow);
        }
        .file-info {
          display: flex;
          flex-direction: column;
        }
        .file-name {
          font-weight: 500;
          color: var(--text-main);
        }
        .file-date {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .file-actions {
          display: flex;
          gap: 0.5rem;
        }
        .download-btn, .delete-file-btn {
          padding: 0.5rem;
          border-radius: 6px;
          transition: var(--transition);
          color: var(--text-muted);
          display: flex;
          align-items: center;
        }
        .download-btn:hover {
          color: var(--primary);
          background: rgba(99, 102, 241, 0.1);
        }
        .delete-file-btn:hover {
          color: var(--danger);
          background: #fee2e2;
        }
        .download-btn svg, .delete-file-btn svg {
          width: 18px;
          height: 18px;
        }
        .empty-text {
          text-align: center;
          color: var(--text-muted);
          font-style: italic;
        }
        .error-message {
          color: var(--danger);
          background: #fee2e2;
          padding: 0.75rem;
          border-radius: var(--radius);
          margin-bottom: 1rem;
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};

export default FileSection;
