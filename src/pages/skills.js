import React from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  git,
  figma,
  nextjs,
  tailwind,
} from '../../public/images/icons';
import Skills from '@/components/Skills';

const technologies = [
  {
    name: 'Core: ',
    elements: [
      { src: html, title: 'HTML', style: 'shadow-orange-500' },
      {
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500',
      },
      {
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500',
      },
    ],
  },
  {
    name: 'Frameworks: ',
    elements: [
      {
        title: 'React JS',
        src: reactjs,
        style: 'shadow-sky-500',
        href: 'https://react.dev/',
      },
      {
        title: 'Next JS',
        src: nextjs,
        style: 'shadow-gray',
        href: 'https://nextjs.org/',
      },
    ],
  },

  {
    name: 'State Management: ',
    elements: [
      { title: 'Redux', src: redux, style: 'shadow-purple-500', href: 'https://redux.js.org/' },
    ],
  },

  {
    name: 'Design: ',
    elements: [
      { title: 'Figma', src: figma, style: 'shadow-green-500', href: 'https://www.figma.com/' },
    ],
  },
  {
    name: 'Tools: ',
    elements: [
      { title: 'Git', src: git, style: 'shadow-orange-500', href: 'https://git-scm.com/' },
      {
        title: 'Tailwind CSS',
        src: tailwind,
        style: 'shadow-sky-500',
        href: 'https://tailwindcss.com/',
      },
    ],
  },
];

const skills = () => {
  return (
    <>
      <Head>
        <title>Vadym Kobylan | Skills Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col justify-center">
        <Layout className="pt-16">
          <h2 className="font-bold text-5xl w-full text-center">Skills</h2>

          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-dark">
            <Skills skills={technologies} />
          </div>
        </Layout>
      </main>
    </>
  );
};

export default skills;
