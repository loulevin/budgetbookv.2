
import ReactDOM from 'react-dom/client'
import './style/index.scss'
import { RouterProvider } from 'react-router-dom'
import router from './AppRouter.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />

);
