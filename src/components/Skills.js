import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          WEB
        </motion.div>
        <Skill name="HTML" x="-19vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="19vw" y="1vw" />
        <Skill name="ReactJS" x="0vw" y="11vw" />
        <Skill name="NextJS" x="-3vw" y="-18vw" />
        <Skill name="Redux" x="15vw" y="-12vw" />
        <Skill name="ThreeJS" x="30vw" y="-5vw" />
        <Skill name="GitHub" x="-22vw" y="-8vw" />
        <Skill name="Figma" x="-20vw" y="14vw" />
        <Skill name="Tailwind CSS" x="19vw" y="15vw" />
        <Skill name="Jokes" x="-38.5vw" y="2vw" />
      </div>
    </>
  );
};

export default Skills;
