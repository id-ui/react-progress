import React from 'react';
import PropTypes from 'prop-types';
import { Container, ProgressIcon } from './styled';

function CircularProgress({ className, ...iconProps }) {
  return (
    <Container className={className}>
      <ProgressIcon {...iconProps} />
    </Container>
  );
}

CircularProgress.propTypes = {
  name: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  duration: PropTypes.number,
};

CircularProgress.defaultProps = {
  name: 'progressCircle',
  color: '#9552D4',
  size: '3rem',
  duration: 1500,
};

export default CircularProgress;
