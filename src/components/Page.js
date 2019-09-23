import React from 'react';
import '../../static/index.scss';
import Heads from './head';
import { Container } from '@material-ui/core';

const Page = ({ children }) => {
  return (
    <>
      <Heads />
      <Container fixed>{children}</Container>
    </>
  );
};

export default Page;
