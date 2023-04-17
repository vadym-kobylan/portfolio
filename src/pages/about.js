import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import React from 'react';

const about = () => {
  return (
    <>
      <Head>
        <title>Vadym Kobylan | About Page</title>
        <meta name='description' content="any description" />
      </Head>
      <main>
        <AnimatedText  />
      </main>
    </>
  );
};

export default about;
