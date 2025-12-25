import React from 'react';
import { useCart } from './CartContext';

const Notification = () => {
  const { notification } = useCart();

  if (!notification) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      backgroundColor: '#28a745',
      color: 'white',
      padding: '12px 20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      zIndex: 1000,
      fontWeight: 'bold',
      fontSize: '14px',
      animation: 'slideIn 0.3s ease-out'
    }}>
      {notification}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Notification;
