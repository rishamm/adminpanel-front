import React from 'react';

const Logout = () => {

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Are you sure you want to log out?</h2>
      <button
        onClick={handleLogout}
        style={{
          padding: '10px 20px',
          backgroundColor: '#d9534f', 
          color: 'white',
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
