import { render } from 'preact'
import './index.scss'
import { App } from './app.jsx'
import { BrowserRouter } from 'react-router-dom'
render(<BrowserRouter
  basename="/masbo_website">
  <App />
</BrowserRouter>, document.getElementById('app'))
