import * as React from 'react';

export interface CircularProgressProps {
    /**
     * progress icon key from icons config (@idui/react-icon => configureIcons)
     * @default progressCircle
     */
    name?: string;
     /**
     * progress icon size
     * @default 3rem
     */
     size?: string;
    /**
     * progress animation duration in ms
     * @default 1500
     */
    duration?: number;
     /**
     * progress icon color
     * @default #9552D4
     */
     color?: string;
     /**
     * Progress className
     */
     className?: string;
}

export class CircularProgress extends React.Component<CircularProgressProps> {}


export interface LinearProgressProps {
     /**
     * progress bar color
     * @default #9552D4
     */
     color?: string;
     /**
     * progress line height if horizontal or progress line width if vertical
     * @default 0.5rem
     */
     size?: string;
     /**
     * progress line width if horizontal or progress line height if vertical
     * @default 100%
     */
     length?: string;
     /**
     * progress animation duration in ms
     * @default 1500
     */
     duration?: number;
     /**
     * Progress className
     */
     className?: string;
     /**
     * progress line orientation
     * @default horizontal
     */
     orientation?: 'horizontal' | 'vertical';
}

export class LinearProgress extends React.Component<LinearProgressProps> {}