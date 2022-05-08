import React, {useContext} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private'
import PagesLogin from './Login/Login';
import PagesProducts from './Products/Products';
import StoreContext from 'components/Store/Context';
import PagesCreateUser from './CreateUser/CreateUser';

const PagesRoot = () => {
  
  const { token } = useContext(StoreContext);
  return (
    <Router>
      <StoreProvider>
          <Switch>
            <Route exact path="/">
            {!token ? <Redirect to="/products" /> : <PagesLogin />}
            </Route>
            <Route path="/login" component={PagesLogin}/>
            <Route path="/user" component={PagesCreateUser}/>
            <RoutesPrivate path="/products" component={PagesProducts} />
          </Switch>
      </StoreProvider>
    </Router>
  )
}


export default PagesRoot;