import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SkillElement = ({ elements }) => {
  return elements.map(({ src, title, style, href }) => (
    <div key={title}>
      {href ? (
        <Link href={href} target={'_blank'}>
          <div
            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ${style}`}>
            <Image src={src} alt="" className="w-20 mx-auto" />
            <p className="mt-4 ">{title}</p>
          </div>
        </Link>
      ) : (
        <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
          <Image src={src} alt="" className="w-20 mx-auto" />
          <p className="mt-4">{title}</p>
        </div>
      )}
    </div>
  ));
};

const Skills = ({ skills }) => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-dark">
      {skills.map(({ name, elements }) => (
        <div key={name}>
          <div>
            <h3 className="font-bold text-3xl text-dark/95 border-b-4 border-dark/90 inline-block mt-10 pb-1">
              {name}
            </h3>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-base font-medium text-center py-8 px-12 sm:px-0">
            <SkillElement elements={elements} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
