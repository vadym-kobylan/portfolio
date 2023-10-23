import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        //viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;{' '}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize">
            {company}
          </a>{' '}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        {work.map((el, id) => (
          <p key={id} className="font-medium w-full md:text-sm">
            {el}
          </p>
        ))}
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  const currDate =
    new Date().toLocaleString('en-US', { month: 'short' }) +
    ' ' +
    new Date().getFullYear().toString();

  return (
    <div className="my-64 md:my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[29px] xs:left-[19px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="FrontEnd Developer"
            company="UISS"
            companyLink="https://www.upwork.com/agencies/uiss/"
            time="Jan 2021 – Aug 2023"
            address="Lviv, Ukraine"
            work={[
              '– Developed and maintained web applications based on React, collaborating with a team of front- and back-end developers.',
              '– Worked with React, Redux, HTML, CSS, and SASS, and had experience with API integration.',
              '– Ensured a bug-free user experience through effective troubleshooting and performance optimization.',
            ]}
          />

          <Details
            position="FrontEnd Developer"
            company="*Your Company Name*"
            companyLink="https://blank.page/*"
            time={`${currDate} – Present`}
            address="*Your company address*"
            work={['-', '-', '-', '-']}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
