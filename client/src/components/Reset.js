import React from 'react';

export default function Reset({ reset }) {
  return (
    <div className="reset">
      <button onClick={reset}>
        <i className="fas fa-redo-alt"></i>
      </button>
    </div>
  );
}
