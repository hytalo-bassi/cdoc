import { createBrowserRouter } from 'react-router-dom';
import Clientes from "./views/clientes/clientes"

export const router = createBrowserRouter([
  { path: "/", element: <div>Hello world!</div> },
  { path: "/clientes", element: <Clientes /> }
])
