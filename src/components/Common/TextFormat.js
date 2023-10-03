import React from 'react';

function TextFormat({ text, className }) {
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: text }} />
  );
}

export default TextFormat;
