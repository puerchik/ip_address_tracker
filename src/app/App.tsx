import { Tracker } from 'pages/tracker'

import { GlobalStyle } from 'styles/GlobalStyle'
import { Normalize } from 'styles/normalize'

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />

      <Tracker />
    </>
  )
}

export default App
