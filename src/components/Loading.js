import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

function Loading ()  {
  return (
    <div >
     {<ReactBootStrap.Spinner animation="border" variant="success" />}
    </div>
  );
};

export default Loading ;