import styled, { keyframes, css } from 'styled-components';
import { prop, switchProp, withProp } from 'styled-tools';

const horizontalProgress = keyframes`
  0% {
    left: -100%;
  }
  50% {
    left: 100%;
  }
  100% {
    left: 100%
  }
`;

const verticalProgress = keyframes`
  0% {
    top: -100%;
  }
  50% {
    top: 100%;
  }
  100% {
    top: 100%
  }
`;

export const Container = styled.div`
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  ${switchProp('orientation', {
    horizontal: css`
      width: ${prop('length')};
      height: ${prop('size')};
      &:before,
      &:after {
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        animation: ${horizontalProgress} ${prop('duration')}ms linear infinite;
      }
    `,
    vertical: css`
      height: ${prop('length')};
      width: ${prop('size')};
      &:before,
      &:after {
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        animation: ${verticalProgress} ${prop('duration')}ms linear infinite;
      }
    `,
  })}

  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    content: '';
    position: absolute;
    border-radius: 0.5rem;
    background-color: ${prop('color')};
  }
  &:after {
    animation-delay: ${withProp('duration', (duration) => duration * 0.5)}ms;
  }
`;
