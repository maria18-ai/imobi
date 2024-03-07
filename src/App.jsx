import { Outlet } from 'react-router-dom'
import './App.css'
import { Pages } from './components/pages/Pages';
import { Footer } from './components/footer/Footer';

function App() {

  return (
    <>

    <Pages />
      <Outlet />
    <Footer />
    </>
  )
}

export default App
