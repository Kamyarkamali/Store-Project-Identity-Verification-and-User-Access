import React from 'react'
import Header from '../module/header/Header'
import Footer from '../Footer/Footer'

function Layout({children}) {
  return (
    <div>
        <header>
            <Header/>
        </header>


        <div className='h-fit'>{children}</div>

    <footer>
        <Footer/>
    </footer>

    </div>
  )
}

export default Layout