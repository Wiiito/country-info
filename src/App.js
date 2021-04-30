import Layout from './components/Layout'
import GlobalStyle from './components/Theme/globals'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './components/Theme'
import React, { useState } from 'react'
import Home from './components/Home'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  localStorage.setItem('theme', theme)
  const themeTogler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout togleTheme={themeTogler}>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default App