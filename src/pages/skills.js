import React from 'react';
import Skills from '@/components/Skills';
import Head from 'next/head';
import Layout from '@/components/Layout';

const skills = () => {
  return (
    <>
      <Head>
        <title>Vadym Kobylan | Skills Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default skills;
