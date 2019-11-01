import React from 'react';
import { Flex } from './Flex';
import { Svg } from './Svg';
import { BorderBox } from './BorderBox';

type SelectProps = {
  children?: any;
};

const MRE = /^m[trblxy]?$/;
const getProps = test => props => {
  const next = {};
  for (const key in props) {
    if (test(key || '')) next[key] = props[key];
  }
  return next;
};
const getMargin = getProps(k => MRE.test(k));
const omitMargin = getProps(k => !MRE.test(k));

const DownArrow = props => (
  <Svg {...props}>
    <path d="M7 10l5 5 5-5z" />
  </Svg>
);

export const Select = React.forwardRef((props: SelectProps, ref: React.Ref<HTMLDivElement>) => (
  <Flex {...getMargin(props)}>
    <BorderBox
      ref={ref}
      as="select"
      variant="select"
      {...omitMargin(props)}
      display="block"
      width="100%"
      p={2}
      border="1px solid"
      borderRadius={4}
      color="inherit"
      bg="transparent"
    />
    <DownArrow ml={-28} alignSelf="center" pointerEvents="none" />
  </Flex>
));
