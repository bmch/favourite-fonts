import React from 'react';

export default function Reset({ reset }) {
  return (
    <div className="reset">
      <button onClick={reset}>
        <i className="fa fa-refresh" aria-hidden="true"></i>
      </button>
    </div>
  );
}
