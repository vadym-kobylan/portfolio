import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg';
import ModelCanvas from '@/canvas/ModelCanvas';
import TransitionEffect from '@/components/TransitionEffect';
import { NextSeo } from 'next-seo';

export default function Home() {
  const seoTitle = 'Vadym Kobylan | Home';
  const seoDesc =
    'Vadym Kobylan, a frontend software engineer who loves building cool things with code.';

  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light lg:min-h-[80vh]">
        <Layout className="pt-0 xl:pt-6 lg:pt-0 md:pt-0 sm:pt-0 lg:mt-2 ">
          <div className="flex items-center justify-beetwen w-full lg:flex-col ">
            <div className="w-1/2 md:w-full md:h-120 sm:mb-5 ">
              <ModelCanvas />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left
                xl:!text-6xl lg:!text-center lg:!text-5xl md:!text-5xl sm:!text-3xl"
              /> 
              <p className="mb-1 text-base font-medium md:text-sm sm:text-xs text-left w-[100%]">
                Hello, and welcome to my profile! 👋
              </p>
              <p className="mb-4 text-base font-medium md:text-sm sm:text-xs">
                I&apos;m a dedicated React developer with a strong passion for crafting interactive and
                visually appealing web applications.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/vadym_kobylan_resume.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark dark:hover:text-light dark:hover:border-light dark:hover:bg-dark md:p-2 md:px-4 md:text-base"
                  download={true}>
                  Resume <LinkArrow className={'w-6 ml-1 md:w-6 h-auto'} />
                </Link>
                <Link
                  href="mailto:vadym.kobylan@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-9 bottom-8 inline-block w-24 lg:hidden">
          <Image src={lightBulb} alt={'Vadym Kobylan'} className="w-full h-auto" />
        </div>
      </main>

      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          description: seoDesc,
          url: `https://vadym-kobylan.vercel.app/`,
          site_name: 'Vadym Kobylan',
        }}
      />
    </>
  );
}
