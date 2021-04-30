import React from 'react'
import Header from './Header'

const Layout = ({ children, togleTheme, theme }) => {
  return (
    <>
      <Header togleTheme={togleTheme}/>
        {children}
    </>
  )
}

export default Layout