import React from 'react';

export default function ScrollToTop({ scrollButton }) {
  return (
    <div
      className={scrollButton ? 'scroll' : 'dissapear'}
      onClick={topFunction}
    >
      <i class="fas fa-arrow-circle-up"></i>
    </div>
  );
}

const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
