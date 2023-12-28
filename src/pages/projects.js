import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import Layout from '@/components/Layout';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import project1 from '../../public/images/projects/project.png';
import designComedy_img from '../../public/images/projects/designComedy.jpg';
import designComedyMasterclas_img from '../../public/images/projects/designComedy_master.png';
import reelsMe_img from '../../public/images/projects/ReelsMe.jpg';
import reactPizza_png from '../../public/images/projects/reactPizza.png';
import portfolio_png from '../../public/images/projects/portfolio.png';
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
import { NextSeo } from 'next-seo';
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl
    rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
      xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full ">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 dark:text-light lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">{title}</h2>
        </Link>
        <div className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</div>
        <div className="mt-2 flex items-center">
          {github && (
            <Link href={github} target="_blank" className="w-10 mr-4 ">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
            sm:px-4 sm:text-base ">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full h-full flex flex-col items-center justify-center rounded-2xl shadow-2xl
    border border-solid border-dark bg-light dark:border-light dark:bg-dark dark:text-light p-6 relative xs:p-4 ">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
      md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          {github && (
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const project = () => {
  const seoTitle = 'Vadym Kobylan | Projects';
  const seoDesc =
    'Vadym Kobylan, a frontend software engineer who loves building cool things with code.';
  return (
    <>
      <Head>
        <title>Vadym Kobylan | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Design Comedy"
                summary="The project was commissioned by a design studio to present their author's course."
                link="https://design-comedy.webflow.io/"
                img={designComedy_img}
                type="Webflow Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Design Master Class"
                link="https://design-master-class.webflow.io/"
                img={designComedyMasterclas_img}
                type="Webflow Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ReelsMe App"
                link="https://www.reelsme.app/"
                img={reelsMe_img}
                type="Webflow Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="React Pizza"
                summary={
                  <div>
                    <p>📝 Full Stack:</p>
                    <p>- ReactJS</p>
                    <p>- Redux (library for storing data on the client side)</p>
                    <p>- redux-thunk (additional library for Redux. Asynchronous actions)</p>
                    <p>- React Router (library for realizing transitions without page reloading)</p>
                    <p>- Axios (library for sending AJAX requests)</p>
                    <p>- json-server (for storing pizzas on a fake server)</p>
                  </div>
                }
                link="https://react-pizza-beta.vercel.app/"
                img={reactPizza_png}
                github="https://github.com/vadym-kobylan/react-pizza"
                type="React Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio Website"
                link="/"
                img={portfolio_png}
                github="https://github.com/vadym-kobylan/portfolio"
                type="Next.js Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Website title"
                link="/"
                img={project1}
                github="/"
                type="Featured Project"
              />
            </div>
          </div>
        </Layout>
      </main>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://vadym-kobylan.vercel.app/projects/`,
          site_name: 'Vadym Kobylan',
        }}
      />
    </>
  );
};

export default project;
