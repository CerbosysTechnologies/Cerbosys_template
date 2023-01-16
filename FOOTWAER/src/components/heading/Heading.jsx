import React from 'react';

const Heading = ({ title, className }) => {
  return (
    <>
      <div>
        <h4 className={`${className} text-center fs_w fs_s30`}>{title}</h4>
      </div>
    </>
  );
};

export default Heading;
