import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <meta
          name="google-site-verification"
          content="XNkTeerlfA-UusDrNmXnONG5ZZybXyAFrDi-yOOCmwo"
        />
        <Script id="theme-switcher" strategy="beforeInterective">
          {`if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}`}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
