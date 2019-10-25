import * as React from 'react';
import { ColorProperty } from 'csstype';

export interface ButtonProps {
  color: ColorProperty;
  style?: React.CSSProperties;
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps): JSX.Element => (
  <button
    style={{
      backgroundColor: props.color,
      border: 'none',
      color: 'white',
      padding: 20,
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '16px',
      margin: '4px 2px',
      borderRadius: 5,
    }}
    onClick={(): void => props.onClick()}
  >
    {props.children}
  </button>
);
