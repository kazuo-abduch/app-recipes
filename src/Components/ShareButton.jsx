import React, { useState } from 'react';
import PropType from 'prop-types';
import shareIcon from '../images/shareIcon.svg';

function ShareButton({ testId, urlShare }) {
  const [copiedAlert, setAlert] = useState(false);

  function renderCopyMsg() {
    return (
      <div>
        Link copied!
      </div>
    );
  }

  function handleShareClick() {
    const five = 5;
    urlShare = urlShare.split('/').slice(0, five);
    urlShare = urlShare.join('/');
    const TIMEOUT = 1000;
    navigator.clipboard.writeText(urlShare);
    setAlert(true);
    setTimeout(() => { setAlert(false); }, TIMEOUT);
  }

  return (
    <div>
      <input
        data-testid={ testId }
        type="image"
        src={ shareIcon }
        alt="share button"
        onClick={ handleShareClick }
      />
      { copiedAlert && renderCopyMsg() }
    </div>
  );
}

ShareButton.propTypes = {
  testId: PropType.string.isRequired,
  urlShare: PropType.string.isRequired,
};

export default ShareButton;
