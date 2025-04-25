import { render } from 'preact'
import './index.scss'
import { App } from './app.jsx'
import { HashRouter } from 'react-router-dom'
render(<HashRouter>
  <App />
</HashRouter>, document.getElementById('app'))
