import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Cart from '../containers/Cart/Cart'
import Login from '../containers/Login/Login'
import Orders from '../containers/Orders/Orders'
import Home from '../Components/pages/Home/Home'
import Profile from '../containers/Profile/Profile'
import Purchase from '../containers/Purchase/Purchase'
import AboutUs from '../Components/pages/AboutUs/AboutUs'
import Delivery from '../Components/pages/Delivery/Delivery'
import Contacts from '../Components/pages/Contacts/Contacts'
import { Page404 } from '../Components/pages/Page404/Page404'
import ProductPage from '../containers/ProductPage/ProductPage'
import OrderMessage from '../containers/OrderMessage/OrderMessage'
import Promotions from '../Components/pages/Promotions/Promotions'
import ChangePassword from '../containers/ChangePassword/ChangePassword'
import RestorePassword from '../containers/RestorePassword/RestorePassword'
import RegisterClients from '../containers/RegisterClients/RegisterClients'
import ErrorMessages from '../Components/commons/ErrorMessages/ErrorMessages'
//////////////////////////////////////////////////

const Routes = ({ history, globalError }) => (
  <Switch>
    <Route
      exact={true} path='/'
      render={() => <Redirect from='/' to='/home'/>}/>
    <Route path='/cart' render={() => <Cart/>}/>
    <Route path='/login' render={() => <Login/>}/>
    <Route path='/orders' render={() => <Orders/>}/>
    <Route path='/about' render={() => <AboutUs/>}/>
    <Route path='/profile' render={() => <Profile/>}/>
    <Route path='/contact' render={() => <Contacts/>}/>
    <Route path='/purchase' render={() => <Purchase/>}/>
    <Route path='/delivery' render={() => <Delivery/>}/>
    <Route path='/promotions' render={() => <Promotions/>}/>
    <Route path='/home' render={() => <Home/>} exact={true}/>
    <Route path='/orderMessage' render={() => <OrderMessage/>}/>
    <Route path='/change-password' render={() => <ChangePassword/>}/>
    <Route path='/registerClients' render={() => <RegisterClients/>}/>
    <Route path='/restore-password' render={() => <RestorePassword/>}/>
    <Route path='/productPage/:productId?' render={() => <ProductPage/>}/>
    <Route
      path='/error' render={() =>
      <ErrorMessages globalError={globalError} history={history}/>}/>
    <Route path='*' render={() => <Page404 history={history}/>}/>
  </Switch>
)

export default Routes
