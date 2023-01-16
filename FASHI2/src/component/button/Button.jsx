import React from 'react';

const Button = ({ className, title }) => {
  return (
    <>
      <button
        style={{
          color: '#fff',
          padding: '12px 20px',
          backgroundColor: '#FFC300',
          borderRadius: '28px',
          border: 'none',
          fontSize: '13px',
        }}
        className={className}
        title={title}
      >
        {' '}
        {title}
      </button>
    </>
  );
};

export default Button;
