import React from 'react';

const styles = `
  /* Inline CSS for indentation */
  .indent {
    margin-left: 20px; /* Adjust this value for your desired indentation level */
  }
`;

function TextFormat({ text, className }) {
  // Replace <tab></tab> with a <div> element with a specific class for indentation
  const indentedText = text.replace(/<tab><\/tab>/g, '<div class="indent"></div>');

  return (
    <div className={className}>
      <style>{styles}</style>
      <div dangerouslySetInnerHTML={{ __html: indentedText }} />
    </div>
  );
}

export default TextFormat;