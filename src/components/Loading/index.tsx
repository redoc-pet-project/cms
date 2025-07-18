// src/components/Loading.tsx
import React from 'react';

const Loading: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
      <span style={styles.text}>Loading...</span>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '1rem',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '5px solid #eee',
    borderTop: '5px solid #333',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
};

// Add global spinner animation
const styleSheet = document.createElement('style');
styleSheet.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`;
document.head.appendChild(styleSheet);

export default Loading;
