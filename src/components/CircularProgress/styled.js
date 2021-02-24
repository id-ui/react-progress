import styled, { keyframes } from 'styled-components';
import Icon from '@idui/react-icon';
import { prop } from 'styled-tools';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ProgressIcon = styled(Icon)`
  animation: ${rotation} ${prop('duration')}ms linear infinite;
  transform-origin: center;
`;
