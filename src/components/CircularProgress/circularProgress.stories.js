import React from 'react';
import CircularProgress from './CircularProgress';

export default {
  title: 'CircularProgress',
  component: CircularProgress,
  argTypes: {
    name: {
      control: {
        type: 'select',
        options: [
          'progressCircle',
          'longLinesProgressCircle',
          'shortLinesProgressCircle',
        ],
      },
      description:
        'progress icon key from icons config (@idui/react-icon => configureIcons)',
      defaultValue: 'progressCircle',
      table: {
        defaultValue: {
          summary: 'progressCircle',
        },
      },
    },
    size: {
      control: 'text',
      description: 'progress icon size',
      defaultValue: '3rem',
      table: {
        defaultValue: {
          summary: '3rem',
        },
      },
    },
    duration: {
      control: 'number',
      description: 'progress animation duration (ms)',
      defaultValue: 1500,
      table: {
        defaultValue: {
          summary: 1500,
        },
      },
    },
    color: {
      control: 'text',
      description: 'progress icon color',
      defaultValue: '#9552D4',
      table: {
        defaultValue: {
          summary: '#9552D4',
        },
      },
    },
    className: {
      control: 'text',
      description: 'Progress className',
    },
  },
};

export function playground(props) {
  return <CircularProgress {...props} />;
}

playground.args = {};
