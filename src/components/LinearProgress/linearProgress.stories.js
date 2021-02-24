import React from 'react';
import LinearProgress from './LinearProgress';

export default {
  title: 'LinearProgress',
  component: LinearProgress,
  argTypes: {
    orientation: {
      control: { type: 'select', options: ['horizontal', 'vertical'] },
      description: 'progress line orientation',
      defaultValue: 'horizontal',
      table: {
        defaultValue: {
          summary: 'horizontal',
        },
      },
    },
    size: {
      control: 'text',
      description:
        'progress line height if horizontal or progress line width if vertical',
      defaultValue: '0.5rem',
      table: {
        defaultValue: {
          summary: '0.5rem',
        },
      },
    },
    length: {
      control: 'text',
      description:
        'progress line width if horizontal or progress line height if vertical',
      defaultValue: '100%',
      table: {
        defaultValue: {
          summary: '100%',
        },
      },
    },
    color: {
      control: 'text',
      description: 'progress bar color',
      defaultValue: '#9552D4',
      table: {
        defaultValue: {
          summary: '#9552D4',
        },
      },
    },
    duration: {
      control: 'number',
      description: 'progress animation duration in ms',
      defaultValue: 1500,
      table: {
        defaultValue: {
          summary: 1500,
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
  return <LinearProgress {...props} />;
}

playground.args = {
  length: '500px',
};
