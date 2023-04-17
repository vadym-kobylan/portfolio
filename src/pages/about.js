import AnimatedText from '@/components/AnimatedText';
import Image from 'next/image';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profilePic from '../../public/images/profile/profilePic.jpg';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }

      if (ref.current && latest.toFixed(1) <= value && value === 1.5) {
        ref.current.textContent = latest.toFixed(1);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Vadym Kobylan | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">About me</h2>
              <p className="font-medium">
                Hi, I&apos;m Vadym Kobylan, a web developer, and I&apos;m passionate about making
                stunning and engaging digital experiences that that delight users and drive results.
                I&apos;m always on the hunt for new features to make my projects more attractive.
              </p>

              <p className="my-4 font-medium">
                - In addition to my technical skills, I approach everything I do with a strong work
                ethic and a dedication to lifelong learning.
              </p>

              <p className="font-medium">
                - As a web developer, I&apos;m very excited about the chance to take on fresh
                challenges and help your company grow with we.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image src={profilePic} alt="Vadym Kobylan" className="w-full h-auto rounded-2xl" />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between py-[6rem]">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 text-right">
                  pet projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={1.5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 text-right">
                  years of study experience
                </h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
