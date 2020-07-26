import React from 'react'

import { useMyHook } from 'use-media-session'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
