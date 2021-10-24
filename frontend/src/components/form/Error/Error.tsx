import React from 'react';

const Error: React.FC<ErrorProps> = ({ error }) => (
  <p className="text-red-400 text-base mt-1">{error}</p>
);

export default Error;

export type ErrorProps = {
  error: string;
};
