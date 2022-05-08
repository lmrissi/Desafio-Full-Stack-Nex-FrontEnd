import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import './Header.css'
import {
    HEADER_ROUTES,
    HEADER_NAMES,
    HEADER_CSS_CONSTS
} from './HeaderConstants';

const Header = () => {
    const { setToken } = useContext(StoreContext);

    function Logout() {
        setToken(null);
    
        sessionStorage.removeItem('token');
      }

    return (
        <header class={HEADER_CSS_CONSTS.HEADER}>
            <div class={HEADER_CSS_CONSTS.LINKS}>
                <a href={HEADER_ROUTES.MENU}>{HEADER_NAMES.MENU}</a>
            </div>
            <div class={HEADER_CSS_CONSTS.LINKS}>
                <button onClick={Logout}>{HEADER_NAMES.LOGOUT}</button>
            </div>
        </header>
    );
}

export default Header;