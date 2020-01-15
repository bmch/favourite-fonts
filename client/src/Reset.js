import React from 'react';

export default function Reset({ reset }) {
  return (
    <div className="reset">
      <i class="fa fa-refresh" aria-hidden="true" onClick={reset}></i>
    </div>
  );
}
