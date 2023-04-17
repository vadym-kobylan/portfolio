import * as React from 'react';

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const InstagramIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={101.996}
    height={102}
    viewBox="0 0 101 101"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <defs>
      <radialGradient id="a" cx={13.551} cy={102.482} r={133.147} gradientUnits="userSpaceOnUse">
        <stop offset={0.09} stopColor="#fa8f21" />
        <stop offset={0.78} stopColor="#d82d7e" />
      </radialGradient>
      <radialGradient id="b" cx={61.859} cy={107.051} r={104.938} gradientUnits="userSpaceOnUse">
        <stop offset={0.64} stopColor="#8c3aaa" stopOpacity={0} />
        <stop offset={1} stopColor="#8c3aaa" />
      </radialGradient>
    </defs>
    <path
      fill="url(#a)"
      d="M34 51a17 17 0 1 1 17 17 17 17 0 0 1-17-17m-9.191 0A26.188 26.188 0 1 0 51 24.812 26.187 26.187 0 0 0 24.812 51M72.1 23.774a6.12 6.12 0 1 0 6.122-6.118 6.123 6.123 0 0 0-6.12 6.118M30.4 92.513a28.187 28.187 0 0 1-9.471-1.754 15.85 15.85 0 0 1-5.866-3.815 15.735 15.735 0 0 1-3.815-5.862 28.161 28.161 0 0 1-1.758-9.471c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374 28.374 0 0 1 1.754-9.471 15.85 15.85 0 0 1 3.815-5.866 15.718 15.718 0 0 1 5.866-3.815A28.161 28.161 0 0 1 30.4 9.484c5.376-.247 6.991-.3 20.6-.3s15.23.053 20.61.3a28.373 28.373 0 0 1 9.471 1.754 15.8 15.8 0 0 1 5.866 3.815 15.8 15.8 0 0 1 3.815 5.866 28.162 28.162 0 0 1 1.754 9.471c.247 5.38.3 6.991.3 20.61s-.049 15.23-.3 20.61a28.294 28.294 0 0 1-1.754 9.471 16.886 16.886 0 0 1-9.681 9.677 28.161 28.161 0 0 1-9.471 1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309a37.4 37.4 0 0 0-12.379 2.369A25.015 25.015 0 0 0 8.56 8.56a24.918 24.918 0 0 0-5.883 9.034 37.407 37.407 0 0 0-2.368 12.38C.058 35.412 0 37.15 0 51s.058 15.588.309 21.026a37.405 37.405 0 0 0 2.369 12.379A24.931 24.931 0 0 0 8.56 93.44a25.076 25.076 0 0 0 9.034 5.883 37.43 37.43 0 0 0 12.379 2.369c5.441.247 7.176.309 21.026.309s15.588-.058 21.026-.309a37.405 37.405 0 0 0 12.379-2.369 26.075 26.075 0 0 0 14.918-14.918 37.3 37.3 0 0 0 2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394 37.394 0 0 0-2.369-12.379A25.08 25.08 0 0 0 93.44 8.56a24.955 24.955 0 0 0-9.03-5.883A37.347 37.347 0 0 0 72.03.309C66.593.062 64.854 0 51 0S35.41.058 29.97.309"
      data-name="Path 14"
    />
    <path
      fill="url(#b)"
      d="M34 51a17 17 0 1 1 17 17 17 17 0 0 1-17-17m-9.191 0A26.188 26.188 0 1 0 51 24.812 26.187 26.187 0 0 0 24.812 51M72.1 23.774a6.12 6.12 0 1 0 6.122-6.118 6.123 6.123 0 0 0-6.12 6.118M30.4 92.513a28.187 28.187 0 0 1-9.471-1.754 15.85 15.85 0 0 1-5.866-3.815 15.735 15.735 0 0 1-3.815-5.862 28.161 28.161 0 0 1-1.758-9.471c-.247-5.376-.3-6.991-.3-20.61s.053-15.23.3-20.61a28.374 28.374 0 0 1 1.754-9.471 15.85 15.85 0 0 1 3.815-5.866 15.718 15.718 0 0 1 5.866-3.815A28.161 28.161 0 0 1 30.4 9.484c5.376-.247 6.991-.3 20.6-.3s15.23.053 20.61.3a28.373 28.373 0 0 1 9.471 1.754 15.8 15.8 0 0 1 5.866 3.815 15.8 15.8 0 0 1 3.815 5.866 28.162 28.162 0 0 1 1.754 9.471c.247 5.38.3 6.991.3 20.61s-.049 15.23-.3 20.61a28.294 28.294 0 0 1-1.754 9.471 16.886 16.886 0 0 1-9.681 9.677 28.161 28.161 0 0 1-9.471 1.754c-5.376.247-6.991.3-20.61.3s-15.23-.049-20.6-.3M29.974.309a37.4 37.4 0 0 0-12.379 2.369A25.015 25.015 0 0 0 8.56 8.56a24.918 24.918 0 0 0-5.883 9.034 37.407 37.407 0 0 0-2.368 12.38C.058 35.412 0 37.15 0 51s.058 15.588.309 21.026a37.405 37.405 0 0 0 2.369 12.379A24.931 24.931 0 0 0 8.56 93.44a25.076 25.076 0 0 0 9.034 5.883 37.43 37.43 0 0 0 12.379 2.369c5.441.247 7.176.309 21.026.309s15.588-.058 21.026-.309a37.405 37.405 0 0 0 12.379-2.369 26.075 26.075 0 0 0 14.918-14.918 37.3 37.3 0 0 0 2.369-12.379c.247-5.442.3-7.176.3-21.026s-.058-15.588-.3-21.026a37.394 37.394 0 0 0-2.369-12.379A25.08 25.08 0 0 0 93.44 8.56a24.955 24.955 0 0 0-9.03-5.883A37.347 37.347 0 0 0 72.03.309C66.593.062 64.854 0 51 0S35.41.058 29.97.309"
      data-name="Path 15"
    />
  </svg>
);

// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;2" />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0">
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
        <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="3;12" />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate fill="freeze" attributeName="cx" begin="0.1s" dur="0.4s" values="22;18" />
        <animate fill="freeze" attributeName="cy" begin="0.1s" dur="0.4s" values="2;6" />
        <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="1;10" />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate fill="freeze" attributeName="r" begin="0.1s" dur="0.4s" values="6;10" />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}>
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2">
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0" />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0" />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2">
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3" />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22" />
        <animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2" />
        <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1" />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0">
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6" />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={1440}
    viewBox="0 0 1080 1080"
    className={`w-full h-auto ${className}`}
    {...rest}>
    <path d="M574.6 151.8c-1 .9-.7 4.7.8 9.8.8 2.7 2.4 9.4 3.6 14.9 1.2 5.5 2.8 12.2 3.5 15 .7 2.7 1.8 7.5 2.4 10.5 2.9 14.3 4.1 19.1 5 20.9.6 1.1 1.1 3.6 1.1 5.6 0 6 2.3 10.1 6 10.9 6.4 1.2 7.9.8 10.4-3.2 1.4-2 6.1-8.9 10.5-15.2 4.4-6.3 11.6-16.7 15.9-23 15.1-22 17.5-25.5 19.4-27.9 2.3-3 1.5-3.9-4.3-4.7-4.5-.6-4.6-.6-7.6 3.7-1.6 2.4-4.7 6.9-6.8 9.9-5.9 8.3-11.2 15.9-15 21.5-1.9 2.7-5.5 7.9-8 11.5-2.6 3.6-5.6 8-6.8 9.7-1.2 1.8-2.5 3.3-2.8 3.3-.7 0-3.7-11.3-5-18.9-.6-2.9-1.4-6.2-1.9-7.2-.6-1-1-2.9-1-4.3 0-2.6-2.9-15.9-5.5-25.1-.8-2.8-1.7-7.1-2-9.6-.3-2.6-1.1-5.3-1.8-6.1-1.2-1.6-9.1-3.1-10.1-2zM457.4 180.8c-5.1 2.9-10.9 7.9-12.4 10.6-1.8 3.5-2.6 3.3-3.7-1.2-.9-3.5-1.1-3.7-4.3-3.4-4.3.3-7.3 2.8-6.1 5.1.5.9 1.2 3.5 1.6 5.8.4 2.4 1 4.5 1.5 4.8.4.3 1.1 2.6 1.5 5.2.4 2.7 1.3 6.1 2 7.8.7 1.6 1.6 4.8 2 7 .4 2.2 1 4.4 1.3 5 .4.5 1.2 3.2 1.9 6 1.9 8.2 3.5 14 4.3 14.8.4.4 2.6.1 4.9-.9 4.8-1.9 5.1-3.2 2.2-12.6-1.1-3.5-2.7-8.8-3.6-11.8-2.1-6.7-3-15.6-2.1-20.3.8-4.3 6.4-10 12.2-12.4 2.4-1 4.2-2.3 4-2.8-.3-.6-1-2.7-1.7-4.8-1.4-4.2-1.3-4.2-5.5-1.9zM662.4 200.4c-.3.8-.4 2.7-.2 4.3.2 2.3.7 2.8 2.8 2.6 1.4-.2 6.3.3 10.9.9 8.2 1.1 8.5 1.3 13.7 6.4 4.6 4.4 5.4 5.8 5.4 8.9 0 3.7-2.4 9.5-3.9 9.5-.5 0-4.7-1.6-9.3-3.6-4.5-2-9.7-4.3-11.5-5-4.6-2-15.2-1.8-18.5.4-8.9 5.9-10.5 19.1-3.3 27.1 4.9 5.4 18.7 11 23.9 9.7 1.4-.3 3.8-.9 5.2-1.2 2.4-.6 2.5-.5 1.9 2.9-.6 3.2-.4 3.7 2.4 5.1 1.6.9 3.6 1.6 4.4 1.6.9 0 3-3.6 5.2-8.8 2.1-4.8 5-11.4 6.6-14.7 6.5-14.2 6.9-15.3 6.9-22.1 0-11.2-5.5-17.7-19.8-23.3-6.5-2.6-21.9-3-22.8-.7zm6.1 31.7c2.2.6 7.7 2.8 12.3 4.9l8.2 3.9-2.1 4.3c-2.7 5.6-6.1 8-11.8 8.6-6.7.6-12.5-1.3-17.1-5.7-4.5-4.2-5.3-8.8-2.4-12.9 2.8-4 6.4-4.9 12.9-3.1zM387 205.2c-11.2 4.7-16 8.4-20.1 15.9-2 3.7-2.3 5.8-2.3 13.9-.1 6.2.4 10.4 1.3 12 4.4 8 8 12.4 13 15.7 5.2 3.5 6.2 3.8 14.6 4.1 7.9.4 9.9.1 14.6-1.9 8-3.4 13.4-7.4 16.7-12.2 4.2-6.3 4.6-8.6 1.6-9.8-4.1-1.5-5-1.1-8.4 3.3-7 9.1-16.2 12.8-27 10.8-4.3-.8-6.2-1.8-8.7-4.5-4-4.2-4.1-5-.5-6.4 1.5-.6 3.4-1.5 4.2-2 .8-.5 5.3-2.7 10-4.9 21-9.9 28-13.4 28-14.1 0-.4-.9-2.6-2-4.8-2.7-5.6-10.9-12.7-16.9-14.7-5.6-1.8-14.3-2-18.1-.4zm16.3 9.8c4.5 2 9.1 6.5 8.2 8-.4.7-14.7 7.9-29.5 14.9-7.5 3.5-8 3.2-8-5 0-14.5 15.5-24 29.3-17.9zM515.6 222.1c-3.7 2.9-3.4 9.2.5 12.2 7.4 5.4 15.3-5 8.9-11.8-2.9-3.1-5.9-3.2-9.4-.4zM728.3 236.7c-1.2.2-2.7 1.1-3.3 1.9-.7.8-1.8 1.4-2.4 1.4-3 .1-13.6 13.2-13.6 16.8 0 1-.4 2.2-1 2.8-.5.5-1.3 3.1-1.6 5.8-1.6 11.2 7.3 25.5 19.3 31.2 4.8 2.2 6.6 2.6 11.5 2.1 6.6-.6 7.2.3 3.6 4.8l-2.2 2.8 2.8 2.3c4.1 3.6 5.8 3 10.2-3.2 2.1-3.1 5.6-7.6 7.7-10.1 2.1-2.5 4.6-5.8 5.5-7.2 1.6-2.4 9.1-12.6 14.5-19.5 1.2-1.5 3.4-4.6 4.9-6.9 1.5-2.2 4.3-5.9 6.2-8.2 1.9-2.3 4.5-5.9 5.7-7.9l2.2-3.7-3.4-2.9c-2.6-2.1-3.8-2.6-5.1-1.9-1 .6-1.8 1.3-1.8 1.7 0 .5-.8 1.7-1.8 2.8-1 1-4.8 6.1-8.6 11.1-3.7 5.1-7.2 9.3-7.7 9.3s-.9-.9-.9-2.1c0-1.2-1.4-4.8-3.2-8-3.2-6.2-9.2-11.5-16.2-14.4-3.3-1.4-15.8-1.9-21.3-.8zm22.4 11.8c5 3.4 8.8 8.5 10.3 14.1 1.1 4 1.1 5.3-.5 10.2-3.6 11.5-11.3 17.6-22.1 17.6-6.9 0-11.2-2.1-16.3-7.9-8.5-9.7-5.3-26 6.6-33.5 4-2.6 5.7-3 11.5-3 5.5 0 7.4.4 10.5 2.5zM328.5 242.2c-12.7 3.2-24.5 14.8-24.5 24.2 0 3.8-1.7 4-4.8.5l-2.8-3.1-3.2 2.7c-1.8 1.5-3.2 3.1-3.2 3.6 0 .9 10.5 14.9 14.3 19.1 1.2 1.3 3.4 4.2 4.9 6.4 1.5 2.1 3.8 5 5.1 6.4 1.2 1.4 4.7 5.6 7.6 9.5 3 3.8 6.8 8.6 8.6 10.5 1.8 1.9 4.6 5.6 6.3 8.1 4.8 7.1 5.2 7.3 9.7 3.5l3.9-3.3-2.6-3.4c-1.5-1.9-3.7-4.6-5-6.1-4.4-5.2-11-14.6-10.9-15.4 0-.5 3-.9 6.6-1.1 8.3-.3 12.1-2.1 18.9-9 5.8-5.8 9.6-14.1 9.6-20.8 0-3.8-2.7-12.4-4.6-14.6-.8-.8-1.4-2.1-1.4-2.7 0-2.1-7.2-9.3-11.4-11.4-3.8-2-6.9-2.9-14.1-4.1-1.6-.3-4.8-.1-7 .5zm13 11.7c9.9 4.5 15.8 16.2 13.5 26.7-2.8 12.5-18.3 20.1-29.5 14.4-5.3-2.7-11.3-8.7-12-12.1-.4-1.6-1.1-3.1-1.6-3.4-2.6-1.7 0-13.7 4.2-19.5 5.2-7 17.2-9.9 25.4-6.1zM795.8 276.1c-1 .5-1.8 1.5-1.8 2 0 .6-2 5.2-4.4 10.2-6.7 13.9-16 34.1-17 36.7-.3.8-1 2.2-1.6 3-.5.8-1.4 2.8-2 4.3-1.3 3.6-6.2 5.7-13.4 5.7-5.1 0-5.7-.3-8.5-3.7-1.7-2.1-3.6-5.2-4.2-7-.9-2.9-1.5-3.3-4.5-3.3-4.3 0-5 1.6-3.3 7.7.9 3 3 6.2 6.1 9.4 5.9 6 10.8 7.6 18.8 6.1 5-.9 8.7-2 24.5-6.8 2.8-.9 7-2.2 9.5-2.9 2.5-.8 5.9-1.8 7.5-2.4 1.7-.6 8.4-2.7 15-4.7 15.1-4.5 20.8-6.5 21.8-7.4.4-.4-.5-2.1-2.2-3.9-3.4-3.6-2.9-3.7-18.6 1.3-5.5 1.8-13.4 4.3-17.5 5.5-4.1 1.2-8.6 2.7-10 3.3-4.7 2-9 2.7-9 1.4 0-.6 2.3-5.8 5.1-11.6s6.4-13.4 8.1-17c1.7-3.6 4.3-9.1 5.9-12.4 1.6-3.2 2.9-6.4 2.9-7.2 0-.7-1.2-2.7-2.7-4.4-2.2-2.4-3.2-2.8-4.5-1.9zM266.2 299.9c-5.9 2.4-13.4 9-16.6 14.7-1.4 2.6-3.3 7.4-4 10.8-3.7 15.7 6.2 31 23.5 36.5 17.7 5.6 38.8-10 40.6-30 1.1-12.1-6.9-25-19.2-30.9-5.2-2.5-7.4-3-13.1-2.9-3.9.1-8.8.8-11.2 1.8zm13.9 8.7c10 2.9 14.3 6.4 17.9 14.3 2.5 5.5 2.5 10.6.1 16.2-4.5 10.2-13.8 14.9-24.8 12.7-6.7-1.4-15.7-9-17.3-14.6-3.3-12.1 2.2-23.7 13.5-28.1 2.8-1.1 5-2 5.1-2 0-.1 2.5.6 5.5 1.5zM845 341.1c-3.6 1.7-8.5 3.9-11 5.1-2.5 1.1-5.2 2.4-6 2.9-.8.5-2.2 1.2-3 1.5-.8.3-2.8 1.2-4.5 2-1.6.7-7.5 3.4-12.9 5.8-5.5 2.5-10.3 5.2-10.8 6-.9 1.6 1.2 6.9 3.2 8.1.6.4 2.8-.1 4.8-1 11.1-5.2 22.1-10.3 25.5-11.8 5.5-2.5 14.9-2.3 19 .5 5.3 3.4 8 8.4 8.5 15.4.4 5.9.3 6.3-3.3 10.3-2.2 2.4-6.3 5.3-9.4 6.7-3.1 1.4-6.3 2.9-7.1 3.5-.8.5-2.2 1.2-3 1.5-5.1 1.9-19 8.9-19 9.6 0 2.6 3.1 7.8 4.6 7.8 1 0 5.2-1.6 9.3-3.6 4.2-2 10.3-4.9 13.6-6.5 9.2-4.4 14.7-5.4 20.9-4 6 1.3 8.6 3.6 11.5 10.1 2.8 6.1 2.7 11.8-.3 15.8-2.1 2.9-8.8 8.2-10.3 8.2-.3 0-4 1.6-8.2 3.6-4.2 2-10.1 4.7-13.1 6.1-8.6 4-9.1 4.6-7.2 9.4.8 2.1 2.1 3.9 2.9 3.9.7 0 5.5-2 10.6-4.4 5-2.4 13.2-6.2 18-8.5 6.2-2.8 10.2-5.5 13.7-9.1 5.6-5.7 6.5-8.8 5.8-18.4-.9-10.2-8.2-20.1-18-24.1l-4.4-1.8 1.9-5.6c1.9-5.7 1.9-9.7-.3-17.3-1.4-4.8-9.3-13.6-14.2-15.5-2.1-.8-3.8-1.7-3.8-2 0-.8 2.8-3.3 3.7-3.3 2.7-.1 3.3-1.7 1.8-4.6-.8-1.6-1.5-3.5-1.5-4.2 0-1.6-.5-1.5-8 1.9zM198 347.5c-1.8 2.9-2 3.8-1 5 .7.8 1.6 1.5 2.1 1.5.4 0 6.1 3 12.6 6.8 6.5 3.7 13.8 7.8 16.3 9.2 6.8 3.6 10.9 5.9 21.7 12.1 5.4 3 10.5 5.8 11.3 6.2.8.4 3.5 1.8 5.9 3.2 2.4 1.4 4.7 2.5 5.1 2.5.3 0 1.6-1.7 2.8-3.9 2.1-3.6 2.1-3.9.4-5.3-1.8-1.6-12.8-8.1-20.9-12.4-2.6-1.4-6.6-3.5-8.8-4.8-2.2-1.2-9.8-5.5-17-9.4-7.1-4-13.7-7.7-14.5-8.2-3.8-2.5-11.1-6-12.4-6-.8 0-2.4 1.6-3.6 3.5zM213.3 392.1c-4.4 1.3-13.6 10-15.5 14.6-5.1 12.6-5.1 19.3.1 30.1 2.1 4.4 7.8 9.5 14.1 12.7 4.3 2.2 6.4 2.6 14.3 2.6 8 0 10-.3 14.4-2.6 5-2.4 12.3-9.6 12.3-12 0-.6.5-1.6 1.1-2.2 4.2-4.2 6.2-20.2 3.5-26.8-1.5-3.6-3.3-4.3-6.6-2.5-1.7.9-1.8 1.9-1.4 9.3.5 7.9.4 8.4-2.9 14.2-1.8 3.3-5.2 7.4-7.5 9.2-4.3 3.3-11.2 5.1-15 3.9-2.4-.8-2.4-1 4.8-19.6 1.2-3 2.8-7.3 3.5-9.5.8-2.2 2.3-6.5 3.5-9.5 1.2-3 2.4-6.7 2.7-8.2.5-2.4.1-2.8-3.3-3.7-4.7-1.3-17.6-1.3-22.1 0zm15.3 9.2c.2.7-.2 2.7-1.1 4.3-.8 1.6-1.5 3.7-1.5 4.6 0 .9-.4 1.9-.9 2.2-.5.3-1.2 1.8-1.5 3.3-.7 2.8-3.7 11.1-6.2 17-.8 1.7-1.4 3.6-1.4 4.1 0 4.1-6.8 0-10.6-6.4-4.5-7.6-2.4-18.3 4.9-25.3 1.9-1.8 5-3.7 6.9-4.1 5.4-1.3 10.8-1.1 11.4.3zM182.4 454.4c-1.5 6.2-1.3 6.4 21.6 20.9 20.4 12.9 23.1 14.9 21.9 16.3-.6.8-2.3 1.4-3.8 1.4-1.4 0-4.6.6-7.1 1.5-6.3 2-27.5 7.4-33.5 8.5-2.7.5-5.5 1.7-6.2 2.6-1.2 1.7-2.8 9.2-2 10 .2.2 1.7-.1 3.3-.7 1.6-.6 5.4-1.7 8.4-2.4s9.1-2.3 13.5-3.5c4.4-1.2 10-2.7 12.5-3.2 2.5-.6 4.9-1.4 5.5-1.9.5-.5 2.1-.9 3.5-.9 1.5 0 5.3-.9 8.5-2s6.6-2 7.6-2c2.3 0 2.9-1 3.6-6.8l.5-4.8-5.3-3.6c-9.6-6.3-22.5-14.5-23.5-14.9-.9-.4-10.8-6.8-21-13.5-6-4-7.2-4.2-8-1zM896 498c-6.3.5-20 1.1-30.5 1.4-10.4.3-19.6.5-20.3.5-.9.1-1.2 1.5-1 4.8l.3 4.8 10.6.3 10.7.3 7.6 7c4.2 3.9 7.6 7.6 7.6 8.2 0 .6-1.2 2.2-2.7 3.4-1.4 1.3-7.8 7.2-14.2 13.2-6.4 5.9-12.9 11.9-14.5 13.3-2.4 2-3 3.4-3.4 8-.3 3.5 0 5.8.7 6.2.7.5 4.4-2.1 8.9-6.2 4.2-3.7 11.3-9.9 15.7-13.7 4.4-3.8 10.3-9 13-11.7 2.8-2.6 5.5-4.8 6.1-4.8.5 0 5.9 4.6 12 10.1 6 5.6 12.9 11.7 15.4 13.7s5.3 4.4 6.2 5.5c2.4 2.6 3.8 1.3 3.8-3.7 0-4.2-.2-4.5-13.7-17.3-16-15-24.2-22.5-29.7-27-2.2-1.8-3.6-3.6-3.2-4 .4-.5 9.8-.9 20.9-1.1 11.1-.1 21.2-.5 22.5-.8 2-.4 2.2-1 2.2-5.9V497l-9.7.1c-5.4.1-15 .5-21.3.9zM200 525.7c-14.2 2.4-24.8 12.9-26.6 26.3-.6 4.8 1.5 15 4.3 20.3 8.5 16.5 36 19.8 49.8 6 7.1-7.1 8.7-11.4 8.6-24.2 0-9.8-.3-11.5-2.5-15.8-1.4-2.6-3.2-5.6-3.9-6.6-2-2.4-5.9-2.1-7.9.7-1.6 2.2-1.6 2.4 1.2 5.8 3.8 4.6 5.4 13.1 3.9 21.3-.9 4.9-1.8 6.7-5.2 10.2-4.5 4.7-10.4 7.4-11.7 5.3-.4-.6-1-10.8-1.4-22.6-.4-11.8-1.2-22.8-1.8-24.4-1-3-1.6-3.2-6.8-2.3zm.9 23c.6 7.1 1.1 16.3 1.1 20.5 0 8.8-.6 9.3-7.2 6-8.3-4.3-12.8-10.9-12.8-18.9 0-9.2 8.5-19.8 16.1-20.2 1.3-.1 1.8 2.1 2.8 12.6zM865.5 574.4c-.5.2-3 1-5.5 1.7-13.5 4-22.5 17-22.4 32.5 0 4 .5 7.8 1.1 8.5.5.8 1.3 2.6 1.6 4 1.4 5.6 14.7 16.9 20.1 16.9 1 0 3.6.5 5.7 1.2 7.8 2.3 20.7-2.6 27.4-10.5 7.7-9 10-25.3 5.1-36.1-3.3-7.2-10.6-13.6-18.1-15.9-6-1.8-13.2-2.9-15-2.3zm8 11.7c6.9 1.3 11.7 4.2 15.3 9.6 2.4 3.4 2.7 4.7 2.6 11.9 0 7.2-.3 8.5-2.8 11.7-1.5 1.9-4.4 4.8-6.3 6.3-3.2 2.4-4.5 2.8-11.2 2.8-9.8.1-16.1-2.9-20.8-9.9-2.8-4-3.3-5.6-3.3-10.8 0-12.2 7.1-20.3 20.1-22.6.3-.1 3.2.4 6.4 1zM198 600.3c-3.6 1.3-8 3.1-9.9 4.1-5.1 2.7-12.7 11.1-15.9 17.5-2.5 5.2-2.7 6.5-2.7 17.7 0 6.9.5 13.1 1.1 14.5.6 1.3 2.1 5.8 3.3 9.9 1.3 4.1 2.9 9 3.7 10.8.8 1.8 1.4 4.1 1.4 5.1s.5 3.2 1.1 5c1.2 3.5 3 3.9 8.1 1.7 1.8-.8 6.7-2.4 10.8-3.6 4.1-1.2 9.3-2.8 11.5-3.5 4.3-1.3 8.7-2.7 23-7 5-1.6 9.4-3.2 10-3.6.5-.5 2-.9 3.3-.9 1.3 0 3.8-.6 5.5-1.4 1.8-.8 4.1-1.6 5.2-1.8 1.6-.3 2-1.1 1.8-3.7-.1-1.9-.6-4.4-1.1-5.5-1.4-2.8-4-10.9-5.6-17.1-3.5-13.8-10.4-25.7-18.2-31.9-10.1-7.9-24.6-10.4-36.4-6.3zm25.5 12.1c10.4 4.9 15.3 12.6 21.8 34.6 2.7 9.1 2.4 11-1.9 11-1.3 0-4.1.6-6.1 1.4-2.1.8-7.8 2.6-12.8 4.1-4.9 1.5-12.8 4-17.5 5.5-4.7 1.5-10 3.1-11.7 3.5-1.8.3-3.5 1.1-3.8 1.6-.4.5-1.5.9-2.5.9-1.4 0-2.2-1.1-3-4.3-.7-2.3-2.5-8.1-4.1-12.9-7.5-22.3-.7-39.7 18-46.4 6.2-2.2 17.8-1.7 23.6 1zM828 642.9c-1.9 3.7-1.2 6.9 2 8.6 1.7.9 3 1.8 3 2 0 .3-1.5 1.1-3.3 1.9-4.4 1.8-10.3 7.1-13.3 11.7-1.3 2-3.1 6.8-4 10.7-1.6 6.8-1.6 7.1.5 14.2 1.9 6.1 3.1 8.1 7.4 12.4 2.9 2.8 6.3 5.6 7.7 6.2 8.4 3.9 10.3 4.4 16.8 4.4 4.9 0 8.4-.6 11.7-2.1 5.7-2.5 12.5-9.1 15.5-14.9 2.5-5 3.7-15.9 2.2-21.3-.6-2-.8-3.7-.5-3.7 1 0 23.8 10.2 24.8 11.1 1.4 1.4 6.1 1.1 7.4-.4.6-.8 1.3-2.7 1.7-4.3.5-2.7.2-3.1-4.8-5.3-2.9-1.3-9.9-4.6-15.6-7.3-5.7-2.6-10.5-4.8-10.8-4.8-.2 0-3.7-1.5-7.6-3.4-6.3-3-15.5-7.3-33.4-15.7-5.1-2.4-6.1-2.4-7.4 0zm25.5 20.2c8.2 4.3 13.5 11.9 13.5 19.4 0 4.3-3.4 12.2-6.8 15.9-3.4 3.5-10.2 6.6-14.9 6.6-4.7 0-15.5-5.3-18.7-9.1-4.1-4.8-5.7-11.7-4.2-18.1 1.5-6.6 3.7-10 8.9-13.8 3.6-2.7 4.9-3 11.2-3 5.2 0 8.1.5 11 2.1zM780.9 688.3c-5.5 5-6.9 7.1-8.4 12.6-1.8 7.1-.1 13.1 7.9 27.3 3.4 6.2 7.6 13.8 9.3 16.8 5.3 9.6 11.7 21.1 14 24.8 1.1 2.1 3.5 6.5 5.2 9.9 1.7 3.5 3.5 6.3 4 6.3 1 0 6.1-6.1 6.1-7.2 0-.4-8.2-15.3-11-19.8-.5-.8-3-5.3-5.6-10-2.6-4.7-5.8-9.9-7.1-11.7-3.5-4.8-3.1-6.5 1.5-5.8 2 .4 6 1.3 8.7 2.1 2.8.8 7 1.9 9.5 2.4 9.1 1.9 14.6 3.2 19 4.5 9.3 2.8 11.1 2.8 14.2-.2 3.4-3.2 3.6-6.1.6-6.8-1.3-.3-4.3-1-6.8-1.6-2.5-.6-7.4-1.7-11-2.4-6.3-1.4-10.2-2.3-20.5-5-2.7-.7-9.3-2.3-14.5-3.5-10.6-2.5-12.1-3.7-14.1-11.2-2-7.3 0-11.3 8.6-17.4 2.9-2 2.9-2.1 1.2-4.7-2.4-3.7-6.3-3.5-10.8.6zM273.8 701.5c-1 2.3-.8 2.9 2.6 6.4 7 7.2 5.9 13.4-3.6 19.8-2.4 1.5-8.9 6.1-14.5 10-5.6 4-10.4 7.3-10.6 7.3-.3 0-2.4-2.9-4.8-6.5-4.6-6.7-6.6-7.8-10.1-5.1-1 .7-1.8 1.9-1.8 2.5 0 1.3 4.5 7.8 6.5 9.6.7.6 1.5 2 1.9 3.2.6 1.9 0 2.7-4.3 5.4-2.8 1.7-5.1 3.5-5.1 4.1 0 1.9 4.1 7.8 5.4 7.8.7 0 3-1.3 5.2-3 4.9-3.7 5.8-3.7 8.6 0 2.3 3.2 5.2 3.8 8.1 1.6 2.3-1.8 2.2-3.1-.8-7-2.4-3.1-2.4-3.4-.8-4.8 1.7-1.4 18.4-13.3 26.5-18.8 7.3-5 9.5-10.1 8.3-19-.6-4.2-1.5-5.9-5.9-10.5-5.8-6.2-8.9-7-10.8-3zM296 741.5c-1.9 2.3.5 7.4 3.9 8 1.4.3 5.1 1.3 8.1 2.3 9.5 3.2 14.9 12.8 13.5 24.1-.6 4.8-1.3 6.1-6.2 11.2-6.8 7.1-12.7 9-21.6 7-8.4-1.8-16.7-11.5-16.7-19.4 0-3.9-1.2-5.2-5.7-6-2.9-.6-3.3-.4-3.9 1.9-1.7 6.7 2.2 16.5 9.4 23.8 11.4 11.7 27.6 13.8 41 5.2 5-3.2 7.4-6 10.8-12.6 2.6-4.9 2.9-6.5 2.8-14-.2-10.1-1-12.3-7.8-21.3-6.5-8.6-23.7-15-27.6-10.2zM754.1 756.6c-2.7 3.1-3 3.8-1.9 5.2 1.1 1.4 17 17.7 51.9 53.4l7.6 7.7 3.9-4 3.8-3.9-22-22.3c-12.2-12.2-25.9-26.1-30.7-31-4.7-4.8-8.7-8.7-9-8.7-.3 0-1.9 1.6-3.6 3.6zM733 776.9c-10.5 3.4-21 14-21 21.1 0 2.6-1.6 2.6-3.2 0-1.7-2.6-3.6-2.5-7.3.4-2.9 2.3-2.9 2.5-1.2 4.3.9 1.1 1.7 2.2 1.7 2.6 0 .3 3.5 5.4 7.8 11.3 4.2 5.8 9.1 12.6 10.7 14.9 5 7.2 12.1 11.5 18.9 11.5 10.1 0 26.1-11.4 31.5-22.4 2.3-4.7 2.3-5 .6-6.3-3.8-2.7-6.8-1.7-9.4 3.1-3.3 6.3-10.2 12.2-16.2 14-4.5 1.4-5.4 1.4-9 0-2.1-.9-5.1-3-6.5-4.7l-2.6-3.1 2.3-1.9c1.3-1 6.2-4.6 10.9-8 9.8-7.2 14-12.6 14.7-18.9 1-8.9-6.2-17.5-15.3-18.3-2.7-.2-6-.1-7.4.4zm9.9 11.7c2.5 2.1 3.1 3.3 3.1 6.5 0 3.3-.7 4.6-4.4 8.3-2.4 2.4-5.6 5.2-7.2 6.2-1.6 1-4.6 3.1-6.8 4.8l-3.8 2.9-2.9-3.3c-2.4-2.7-2.9-4.2-2.9-8.2 0-6.7 2.4-11.2 8.3-15.9 6.2-4.9 11.8-5.4 16.6-1.3zM348.6 783.2c-1.3 1.8-3.2 4.7-4.3 6.5-1 1.8-3.8 6-6.2 9.5-8.7 12.4-13.1 21.2-13.1 26.5 0 3.7 3.6 10.7 7.6 14.9 6.6 6.8 15.7 11.5 25.1 13 5.3.8 7.3-.6 7.3-5.2 0-3.2-.1-3.3-5.7-4-7.1-.9-13.7-4.1-18.7-9.3-3.6-3.6-3.9-4.4-3.9-9.5 0-5.3 2.1-10.6 4.2-10.6.5 0 3.7 1.9 7.3 4.2 15.3 10.2 16.6 10.8 24.7 10.8 6.5 0 7.3-.2 10.7-3.2 6.6-5.8 8-12.5 4.3-20.4-4.3-9-18-17.1-27.1-16.1l-4.8.6 1.6-3.1c1.6-3.1 1.6-3.2-1-5.5-3.6-3.1-5-2.9-8 .9zm19.9 16.4c7.3 3.4 10.5 7.3 10.5 12.8 0 2.3-.7 5.1-1.5 6.3-1.9 2.7-7.4 3.9-11.6 2.4-4.3-1.5-19.9-12-19.9-13.4 0-2.4 4.7-7.7 8-9.1 5.1-2.2 8.4-1.9 14.5 1zM682.3 809.7c-5 1.7-5.4 3.4-2.4 9.7 1 2.3 2.8 6.6 4 9.6 1.2 3 2.6 6.4 3.1 7.5 5.7 13 6.2 16.3 3.1 22.3-3.7 7.1-11.6 12.2-19.2 12.2-4.4 0-5.4-.5-9.2-3.9-2.4-2.2-4.8-5-5.4-6.3-2.6-5.4-12.3-28.6-12.3-29.5 0-.5-.6-1.7-1.3-2.7-1.3-1.7-1.5-1.7-6.1.3-2.6 1.2-4.6 2.5-4.4 2.9 1 1.9 2.8 6.2 4.8 11.2 2 5 4.4 10.3 10.1 22.8 2.4 5.4 8.1 11.6 12.4 13.6 1.9 1 6 1.6 9.8 1.6 5.4 0 7.6-.6 13.5-3.5 6.8-3.4 10-6.5 13.2-12.9 1.3-2.5 1.6-2.6 2.5-1 .5.9 1.8 2.5 2.7 3.5 1.6 1.7 1.9 1.7 5.6.1 2.7-1.1 3.8-2.1 3.4-3.2-.3-.8-3.1-7.6-6.3-15.1-3.3-7.5-5.9-13.9-5.9-14.3 0-.3-1.3-3.4-2.9-6.8-1.5-3.5-4.1-9.3-5.6-13.1-1.5-3.7-2.8-6.7-2.9-6.6-.1 0-2 .7-4.3 1.6zM404.3 820c-2.9 1.7-3.1 2.2-2.3 5.1 1.2 4.1 1.2 4.1 4.4 2.9 6.6-2.5 16.7-.2 23.9 5.3 6.5 5 10.6 16.1 7.7 20.7-.7 1.2-1.6 1.1-6.2-.7-2.9-1.2-9.6-3.8-14.8-5.8-5.2-2-11.3-4.5-13.6-5.6-2.2-1-4.5-1.9-5.1-1.9-.6 0-2.4-.7-3.9-1.5-4.4-2.2-4.8-2-6.7 4-6.4 20.9 8.1 40.5 30.1 40.5 3.4 0 7-.4 8-.9.9-.4 3.9-1.9 6.6-3.2 12.3-6.1 19.4-23.7 15.1-37.4-2.1-6.7-9.6-15.5-15.8-18.6-9.6-5-21.9-6.3-27.4-2.9zm-2.2 29.5c2.4.8 5.3 1.9 6.4 2.4 5.3 2.5 11.9 5.1 12.8 5.1.8 0 11.6 4.7 12.5 5.5 1 .8-2.6 5.5-6.3 8.2-3.8 2.8-5.2 3.3-10.3 3.3-4.8 0-6.8-.6-11.2-3.3-8.1-4.7-12.9-14.6-10.4-21.1.8-2 1.1-2 6.5-.1zM461.9 837.2c.5 1.4 3.7 8 7.1 14.7 3.3 6.7 5.8 12.6 5.5 13.1-.3.5-2.3 1.4-4.3 2.1-8.9 2.6-17.2 15.4-17.2 26.5 0 5.1 3.7 13.4 7.8 17.7 4.5 4.6 14.6 9.7 19.3 9.7 1.9 0 5 .5 6.9 1 3.1.9 24.3 4 27.8 4 .7 0 1.2-1.3 1.2-3.3 0-1.7.5-5.2 1.1-7.7 1-4.2 2.3-13.1 4.9-33 .6-4.7 1.7-12.6 2.6-17.5.8-5 1.5-11.5 1.7-14.5l.2-5.5h-9.8l-1.3 6.1c-.7 3.4-1.5 8.7-1.9 11.8-.4 3.1-1.2 5.6-1.9 5.6-.6-.1-4.2-.5-8.1-1.1-3.8-.6-9.2-1.4-12-1.7l-5-.7-4.7-9c-2.6-5-5.6-10.9-6.7-13.2-2.2-4.7-4-5.9-10-6.9-4.1-.7-4.1-.6-3.2 1.8zm41.6 39 7 1.4-.3 6.4c-.1 3.6-.9 10.3-1.7 15-.8 4.7-1.7 10.2-2 12.2-.6 3.6-.8 3.8-4.3 3.8-2 0-5.5-.5-7.7-1s-6.9-1.4-10.4-2c-13.2-2.2-19.1-7.9-19.1-18.6 0-7.7 2.9-13.6 8.5-16.9 3.6-2.2 4.9-2.4 13.5-2 5.2.2 12.7.9 16.5 1.7zM581.6 841.6c-.9.9-1.6 3.2-1.6 5.4 0 4.9 2.1 7 7 7s7-2.1 7-7c0-2.2-.7-4.5-1.6-5.4-2-2.1-8.8-2.1-10.8 0z" />
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);