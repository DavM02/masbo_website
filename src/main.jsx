import { render } from 'preact'
import './index.scss'
import { App } from './app.jsx'
import { HashRouter } from 'react-router-dom'
render(<HashRouter
  // basename="/masbo_website"
>
  <App />
</HashRouter>, document.getElementById('app'))
