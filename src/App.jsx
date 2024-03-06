import { Outlet } from 'react-router-dom'
import './App.css'
import { Pages } from './components/pages/Pages';

function App() {

  return (
    <>

    <Pages />
      <Outlet />
      {/* outros components// footer */}
    </>
  )
}

export default App
