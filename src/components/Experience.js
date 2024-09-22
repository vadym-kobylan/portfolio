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
          <div key={id} className="work-item mt-4">
            {/* Render the title */}
            <p className="font-medium w-full md:text-sm">
              <strong>{el.title}</strong>
            </p>

            {/* Render the points */}
            {el.points.map((point, index) => (
              <p key={index} className="font-medium w-full md:text-sm">
                {point}
              </p>
            ))}
          </div>
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
            position="Frontend Developer"
            company="UISS"
            companyLink="https://www.upwork.com/agencies/uiss/"
            time="Apr 2023 – Oct 2023"
            address="Lviv, Ukraine"
            work={[
              {
                title: 'Customer Applications',
                points: [
                  '– Developed and maintained web applications based on React, collaborating with a team of front- and back-end developers.',
                  '– Worked with React, Redux, HTML, CSS, and SASS, and had experience with API integration.',
                  '– Ensured a bug-free user experience through effective troubleshooting and performance optimization.',
                ],
              },
              {
                title: 'React Pizza | Pet Project',
                points: [
                  '– Developed a React Pizza app using ReactJS 18 and TypeScript. Managed state with Redux Toolkit and handled navigation with React Router v6.',
                  '– Used Axios for backend communication. Styled the app with CSS Modules/SCSS and maintained clean code with Prettier.',
                  '– Added features like skeleton loading with React Content Loader, pagination, and debouncing with Lodash.',
                ],
              },
            ]}
          />

          <Details
            position="Webflow Developer"
            company="Figmatica"
            companyLink="https://www.figmatica.com/"
            time={`${currDate} – Present`}
            address="Lviv, Ukraine"
            work={[
              {
                title: 'One Right Eye',
                points: [
                  '– Developed the website for One Righte Eye, integrating a CMS and connecting the backend. Implemented a full authentication system, including login, registration, and user account management. Utilized JavaScript and React extensively to create a seamless user experience and ensure smooth functionality across the platform.',
                ],
              },
              {
                title: 'Acvian | EOR provider',
                points: [
                  '– Developed the Acvian website by implementing a flexible CMS system and integrating a dynamic calculator feature (Forecast your employee cost). Created over 30 pages with engaging designs and animations to enhance user experience and maintain a high level of interactivity throughout the site.',
                ],
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
