import React, { Fragment } from 'react';
import { configureIcons } from '@idui/react-icon';

configureIcons({
  progressCircle: {
    viewBox: '0 0 19 20',
    content: (
      <Fragment>
        <path
          d="M10.9556 1.05088C11.0143 0.501716 10.6161 0.00372308 10.0638 0.000198839C8.5754 -0.00929913 7.09915 0.31364 5.74462 0.950596C4.08751 1.72983 2.67618 2.94912 1.66454 4.47549C0.652909 6.00186 0.0798091 7.77671 0.00774637 9.60647C-0.0643163 11.4362 0.367425 13.2506 1.25589 14.8519C2.14435 16.4531 3.45541 17.7796 5.0461 18.6867C6.63679 19.5939 8.44603 20.0468 10.2765 19.9962C12.107 19.9455 13.8884 19.3933 15.4265 18.3996C16.6838 17.5873 17.739 16.5056 18.5186 15.2377C18.8079 14.7672 18.5961 14.1658 18.0991 13.9249C17.6021 13.6841 17.009 13.8961 16.708 14.3592C16.0961 15.3008 15.2907 16.1062 14.3412 16.7197C13.1107 17.5146 11.6856 17.9564 10.2212 17.9969C8.75683 18.0374 7.30944 17.6751 6.03688 16.9494C4.76433 16.2236 3.71548 15.1624 3.00471 13.8815C2.29394 12.6005 1.94855 11.149 2.0062 9.68517C2.06385 8.22137 2.52233 6.80149 3.33164 5.58039C4.14094 4.3593 5.27001 3.38387 6.59569 2.76048C7.61862 2.27946 8.72831 2.02229 9.85104 2.00138C10.4032 1.9911 10.897 1.60004 10.9556 1.05088Z"
          fill="currentColor"
        />
      </Fragment>
    ),
  },
  longLinesProgressCircle: {
    viewBox: '0 0 20 20',
    content: (
      <Fragment width="20" height="20">
        <rect
          x="9"
          width="2"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.75"
        />
        <rect
          x="9"
          y="14"
          width="2"
          height="6"
          rx="1"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="20"
          y="9"
          width="2"
          height="6"
          rx="1"
          transform="rotate(90 20 9)"
          fill="currentColor"
        />
        <rect
          x="6"
          y="9"
          width="2"
          height="6"
          rx="1"
          transform="rotate(90 6 9)"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="16.3633"
          y="2.22183"
          width="2"
          height="6"
          rx="1"
          transform="rotate(45 16.3633 2.22183)"
          fill="currentColor"
        />
        <rect
          x="6.46484"
          y="12.1213"
          width="2"
          height="6"
          rx="1"
          transform="rotate(45 6.46484 12.1213)"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="17.7773"
          y="16.363"
          width="2"
          height="6"
          rx="1"
          transform="rotate(135 17.7773 16.363)"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="7.87891"
          y="6.46454"
          width="2"
          height="6"
          rx="1"
          transform="rotate(135 7.87891 6.46454)"
          fill="currentColor"
          opacity="0.75"
        />
      </Fragment>
    ),
  },
  shortLinesProgressCircle: {
    viewBox: '0 0 20 20',
    content: (
      <Fragment>
        <rect x="9" width="2" height="4" rx="1" fill="currentColor" />
        <rect
          x="9"
          y="16"
          width="2"
          height="4"
          rx="1"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="20"
          y="9"
          width="2"
          height="4"
          rx="1"
          transform="rotate(90 20 9)"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="4"
          y="9"
          width="2"
          height="4"
          rx="1"
          transform="rotate(90 4 9)"
          fill="currentColor"
          opacity="0.75"
        />
        <rect
          x="16.3633"
          y="2.22183"
          width="2"
          height="4"
          rx="1"
          transform="rotate(45 16.3633 2.22183)"
          fill="currentColor"
        />
        <rect
          x="5.05078"
          y="13.5355"
          width="2"
          height="4"
          rx="1"
          transform="rotate(45 5.05078 13.5355)"
          fill="currentColor"
          opacity="0.75"
        />
        <rect
          x="17.7773"
          y="16.3631"
          width="2"
          height="4"
          rx="1"
          transform="rotate(135 17.7773 16.3631)"
          fill="currentColor"
          opacity="0.25"
        />
        <rect
          x="6.46484"
          y="5.05054"
          width="2"
          height="4"
          rx="1"
          transform="rotate(135 6.46484 5.05054)"
          fill="currentColor"
        />
      </Fragment>
    ),
  },
});
