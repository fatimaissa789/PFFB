
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
//import pages
import Login from './pages/Login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Resetpassword from './pages/editpassword/Resetpassword';

import Renicial from './pages/Reinitial/Renicial';
//root router
const router = createBrowserRouter ([
  {
    path: '/',
    element: <Login/>
  },
  { 
    path:'/dashboard',
   element:<Dashboard/>

  },
  // edite password
  {
    path:'/resetpassword',
    element: <Resetpassword/>

  },
  {
    path:'/reload',
    element: <Renicial/>

  }
])

function App() {
  return (
   <main>
    <RouterProvider router = {router}></RouterProvider>
   </main>
    
  );
}

export default App;
