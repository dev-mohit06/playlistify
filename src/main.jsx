import { createRoot } from 'react-dom/client'
import './index.css'

import routes from './common/routes.jsx';
import { RouterProvider } from 'react-router-dom'
import {AuthProvider} from './common/context.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={routes}/>
  </AuthProvider>
)
