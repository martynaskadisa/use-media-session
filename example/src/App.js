import React from 'react';

const App = () => {
  return (
    <div style={{ maxWidth: 900, margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>use-media-session</h1>
      <p style={{ textAlign: 'center', marginBottom: '5rem' }}>
        React hooks for interacting with Media Session API
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
      <h3>useMediaMeta</h3>
      <iframe
        src="https://codesandbox.io/embed/use-media-meta-example-g14rj?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
        style={{
          width: '100%',
          height: '600px',
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        title="use-media-meta-example"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <h3>useMediaSession</h3>
      <iframe
        src="https://codesandbox.io/embed/use-media-session-example-ihfgs?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark"
        style={{
          width: '100%',
          height: '600px',
          border: 0,
          borderRadius: 4,
          overflow: 'hidden',
        }}
        title="use-media-meta-example"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <h2>API reference</h2>
      <h3>useMediaMeta</h3>
    </div>
  );
};
export default App;
