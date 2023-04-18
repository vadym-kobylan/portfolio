import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, name, link, place, info }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        viewport={{ once: true }}>
        <h3 className="capitalize font-bold text-2xl">
          {type}&nbsp;{' '}
          <a href={link} target="_blank" className="text-primary capitalize">
            {name}
          </a>{' '}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="mt-64 mb-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-1 w-[4px] h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Software Engineering"
            link="https://www.wunu.edu.ua/"
            name="WUNU"
            time="09.2020 - Present"
            place="West Ukrainian National University"
            info="The purpose of the program is to train specialists capable of analyzing, estimating costs, designing,
            to design, test and support the software of complex systems
            the given deadline, without spending unnecessary resources, achieving the set indicators
            efficiency in accordance with customer requirements, specifications and standards."
          />

          <Details
            type="Front-end React JS Web Development Course"
            link="https://apiko.academy/"
            name="Apiko"
            time="09.2022 - 12.2022"
            place="Apiko Courses"
            info="The 3-month training intensive is devoted to web development and front-end direction using React technologies. The course covers theoretical and practical aspects - JavaScript, working with DOM, React and Redux."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
