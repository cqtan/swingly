import React from 'react';

const makeError = () => {
  throw new Error('I errored on purpose!');
}

const ErrorPage = (props) => {
  return (
    <>
      {makeError()}
    </>
  );
}


export default ErrorPage;