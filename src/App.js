import i18next from 'i18next'
import { compose } from 'redux'
import { connect, Provider } from 'react-redux'
import React, { Component, StrictMode } from 'react'
import { BrowserRouter, withRouter } from 'react-router-dom'
import './App.scss'
import './localization'
import store from './redux/index'
import Routes from './routes/routes'
import Footer from './Components/basics/Footer/Footer'
import Preloader from './Components/commons/Preloader/Preloader'
import HeaderContainer from './Components/basics/Header/HeaderContainer'
import {
  initializeApp,
  catchGlobalError,
} from './redux/reducers/appReducer/thunks'
//////////////////////////////////////////////////

class App extends Component {
  componentDidCatch (error, errorInfo) {
    this.props.catchGlobalError(error)
  };

  catchAllUnhandledErrors = ({ reason }) => {
    this.props.catchGlobalError(reason.toString())
  }

  componentDidMount () {
    this.props.initializeApp()
    const lngFromStorage = localStorage.getItem('language')
    i18next.changeLanguage(lngFromStorage)
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  };

  componentWillUnmount () {
    window.removeEventListener('unhandledrejection',
      this.catchAllUnhandledErrors)
  };

  render () {
    if (!this.props.initialized) {
      return <Preloader/>
    }
    // if (this.props.globalError) {
    //     return <ErrorMessages globalError={this.props.globalError} history={this.props.history}/>
    // }

    return (
      <div className='app-wrapper'>
        <HeaderContainer/>
        <div className='app-wrapper-content'>
          <Routes
            history={this.props.history}
            globalError={this.props.globalError}/>
        </div>
        <Footer/>
      </div>
    )
  };
}

let mapStateToProps = ({ app }) => ({
  history: app.history,
  isFetching: app.isFetching,
  globalError: app.globalError,
  initialized: app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { catchGlobalError, initializeApp }),
)(App)

let PizzachuApp = props => <StrictMode>
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>
</StrictMode>

export default PizzachuApp
