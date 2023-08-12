import React from 'react'
import Collections from './components/Collections/Collections'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Newrelease from './components/Newrelease/Newrelease'
import Hotsales from './components/Hotsales/Hotsales'
// import Work from './components/Work/Work'
import css from './styles/App.module.scss'

const App = () => {
  //don't forget to add font link in index.html
  return (

    // the "bg-primary" styling class is from global css, "css.container" references the class container from the app module css in style folder
    // the global.css and the index.css is imported into the main.jsx so that the can referenced in every file 
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Collections />
      <Newrelease />
      <Hotsales />
      <Footer />
    </div>
  )
}

export default App