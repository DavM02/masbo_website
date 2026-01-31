import { render } from 'preact';
import './index.scss';

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import { App } from './app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

 
const queryClient = new QueryClient();

const router = createHashRouter(
  createRoutesFromElements(
    <Route
      path="*"
      element={<App />} />
  )
);

 
render(
  <QueryClientProvider
    client={queryClient}>
    <RouterProvider
      router={router} />
  </QueryClientProvider>,
  document.getElementById('app')
);
