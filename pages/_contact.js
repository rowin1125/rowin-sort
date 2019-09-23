import React from 'react';
import Head from 'next/head';

import Navigation from '../src/components/Navigation';
import ContactForm from '../src/components/ContactForm';
import Footer from '../src/components/Footer';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact - Rowin Mol</title>
      </Head>
      <Navigation />
      <ContactForm />
      <Footer />
    </>
  );
};

export default contact;
