import { render } from 'preact'
import './index.scss'

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import { App } from './app'

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={<App />} />
  )
)

render(
  <RouterProvider
    router={router} />,
  document.getElementById('app')
)
