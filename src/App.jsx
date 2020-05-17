import React from 'react'
import MainPage from './pages/MainPage/MainPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SignInPage from './pages/SignInPage/SignInPage'
import store from './redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Theme from './Theme'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Theme>
            <Route path='/register'>
              <RegisterPage />
            </Route>
            <Route path='/signin'>
              <SignInPage />
            </Route>{' '}
            <Route path='/'>
              <MainPage />
            </Route>
          </Theme>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
