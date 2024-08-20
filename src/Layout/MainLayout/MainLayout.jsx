import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <header>
            <Header />
          </header>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout
MainLayout
