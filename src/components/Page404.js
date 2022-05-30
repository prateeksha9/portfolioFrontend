import React from 'react';

var quote = require('../assets/quoteNot.png');
function Page404(props) {
  return (
    <div className="about">
      <div className="myDescriptionNot">
        <div className="section_heads">
          <strong>Page Not Found!!!</strong>
        </div>
        <div className="quoteNot">
          <img src={quote} alt="quote" />
        </div>
      </div>
    </div>
  );
}

export default Page404;
