import { Outlet } from 'react-router-dom'
import './index.css'
import Navbar from './Navbar'

export default function App() {
  return (
    <>
      <h1>Real Estate</h1>
      <Navbar />
      <Outlet />
    </>
  )
}
