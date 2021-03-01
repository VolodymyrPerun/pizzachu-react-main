import React, {Component, StrictMode} from 'react';
import './App.scss';
import AboutUs from "./Components/pages/AboutUs/AboutUs";
import Contacts from "./Components/pages/Contacts/Contacts";
import Feedbacks from "./Components/pages/Feedbacks/Feedbacks";
import Home from "./Components/pages/Home/Home";
import Promotions from './Components/pages/Promotions/Promotions';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./Components/basics/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {catchGlobalError, initializeApp} from "./redux/reducers/appReducer/thunks";
import Preloader from "./Components/commons/Preloader/Preloader";
import store from "./redux/index";
import DialogsContainer from "./Components/pages/Feedbacks/FeedbacksContainer";
import {Page404} from "./Components/pages/Page404/Page404";
import ErrorMessages from "./Components/commons/ErrorMessages/ErrorMessages";
import ProductPage from "./containers/ProductPage/ProductPage";
import Delivery from "./Components/pages/Delivery/Delivery";
import Footer from "./Components/basics/Footer/Footer";
import Cart from "./containers/Cart/Cart";
import Login from "./containers/Login/Login";
import Purchase from "./containers/Purchase/Purchase";
import OrderMessage from "./containers/OrderMessage/OrderMessage";


class App extends Component {

    componentDidCatch(error, errorInfo) {
        this.props.catchGlobalError(error);
    };

    catchAllUnhandledErrors = ({reason}) => {
        this.props.catchGlobalError(reason.toString());
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };


    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        // if (this.props.globalError) {
        //     return <ErrorMessages globalError={this.props.globalError} history={this.props.history}/>
        // }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Footer/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/'
                               render={() => <Redirect from={"/"} to={"/home"}/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/about' render={() => <AboutUs/>}/>
                        <Route path='/contact' render={() => <Contacts/>}/>
                        <Route path='/feedbacks' render={() => <Feedbacks/>}/>
                        <Route path='/home' render={() => <Home/>} exact/>
                        <Route path='/promotions' render={() => <Promotions/>}/>
                        <Route path='/purchase' render={() => <Purchase/>}/>
                        <Route path='/delivery' render={() => <Delivery/>}/>
                        <Route path='/cart' render={() => <Cart/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/productPage/:productId?' render={() => <ProductPage/>}/>
                        <Route path='/orderMessage' render={() => <OrderMessage/>}/>
                        <Route path='/error' render={() =>
                            <ErrorMessages globalError={this.props.globalError} history={this.props.history}/>}/>
                        <Route path='*' render={() => <Page404 history={this.props.history}/>}/>}/>
                    </Switch>
                </div>
            </div>
        );
    };
}

let mapStateToProps = ({app}) => {
    return {
        globalError: app.globalError,
        initialized: app.initialized,
        isFetching: app.isFetching
    }
};

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {catchGlobalError, initializeApp}))(App);

let SocialApp = props => {
    return <StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </StrictMode>
};

export default SocialApp;
