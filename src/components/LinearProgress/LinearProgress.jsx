import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

function LinearProgress(props) {
  return <Container {...props} />;
}

LinearProgress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  length: PropTypes.string,
  duration: PropTypes.number,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

LinearProgress.defaultProps = {
  color: '#9552D4',
  size: '0.5rem',
  duration: 1500,
  length: '100%',
  orientation: 'horizontal',
};

export default LinearProgress;
