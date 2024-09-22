import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  git,
  figma,
  nextjs,
  tailwind,
  webflow,
} from '../../public/images/icons';
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';
import { NextSeo } from 'next-seo';

const skills = () => {
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
        {
          src: typescript,
          title: 'TypeScript',
          style: 'shadow-blue-500',
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
          style: 'shadow-gray dark:shadow-light',
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
        {
          title: 'Webflow',
          src: webflow,
          style: 'shadow-sky-500',
          href: 'https://webflow.com/',
        },
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
  const seoTitle = 'Vadym Kobylan | Skills';
  const seoDesc =
    'Vadym Kobylan, a frontend software engineer who loves building cool things with code.';
  return (
    <>
      <Head>
        <title>Vadym Kobylan | Skills</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Force has no place where there is need of skill."
            className="mb-5 text-[4.8rem]
          xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl"
          />
          <div className="">
            <Skills skills={technologies} />
          </div>
        </Layout>
      </main>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://vadym-kobylan.vercel.app/skills/`,
          site_name: 'Vadym Kobylan',
        }}
      />
    </>
  );
};

export default skills;
