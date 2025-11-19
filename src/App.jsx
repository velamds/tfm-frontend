import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
  from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import AlertList from './pages/AlertList';
import AlertForm from './pages/AlertForm';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout/>}>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/alerts" element={<AlertList />} />
        <Route path="/alert/create" element={<AlertForm />} />
        <Route path='/*' element={<NotFound/>}/>
      </Route>
      
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

    </>
  )
);

export default function App() {
  
  return <RouterProvider router={router}/>
}