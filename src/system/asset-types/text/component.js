import React, { PropTypes } from 'react';

const Text = props => (
  <input type="text" name={props.name} />
);

const { func, string } = PropTypes;

Text.propTypes = {
  update: func.isRequired,
  name: string.isRequired,
};

export default Text;
