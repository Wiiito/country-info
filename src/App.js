//Components

import { lightTheme, darkTheme } from './components/Theme'
import Home from './components/Home'
import Layout from './components/Layout'
import GlobalStyle from './components/Theme/globals'
import Detail from './components/Detail'

//React

import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Theme

import { ThemeProvider } from 'styled-components'

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
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path="/details/:id" component={Detail}/>
          </Switch>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  )
}

export default App