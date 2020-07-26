import React from 'react';
import { useMediaMeta } from 'use-media-session';

const App = () => {
  useMediaMeta({
    title: 'React app',
    album: 'React',
    artist: 'React',
  });
  return (
    <div style={{ maxWidth: 800, margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>use-media-session</h1>
      <p style={{ textAlign: 'center', marginBottom: '5rem' }}>
        Hooks for interacting with Media Session API
      </p>
      <div style={{ textAlign: 'center' }}>
        <a
          href="https://github.com/martynaskadisa/use-media-session"
          target="_blank"
          rel="noopener noreferrer"
          class="button"
        >
          Github
        </a>
      </div>
      <h2 style={{ marginTop: '5rem' }}>Install</h2>
      <pre>npm install --save use-media-session</pre>
      <p>or</p>
      <pre>yarn add use-media-session</pre>
      <h2 style={{ marginTop: '5rem' }}>Examples</h2>
      <p>// @TODO</p>
      <h3>API reference</h3>
      <p>// also @TODO</p>
    </div>
  );
};
export default App;
