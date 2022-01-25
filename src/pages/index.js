import React, { useEffect, useState } from 'react';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);

  return (
    <main>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <meta property="og:type" content="website" />
         <meta property="og:title" content="안녕하세요, 타이틀 입니다." />
          <meta property="og:description" content="이것은 디스크립션 인데요. 잘 나오나요?" />
          <meta property="og:image" content="https://picsum.photos/1200/630" />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      <h1>Gatsby + API Route</h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{' '}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{' '}
        which contains a serverless{' '}
        <a href="https://nodejs.org/en/">Node.js</a> function. See{' '}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
