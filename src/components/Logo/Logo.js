import React from 'react';

import pizzaLogo from '../../assets/images/pizza-logo.png';
import './Logo.css';

const logo = (props) => (
    <div className={'Logo'}>
        <img className={'LogoImg'} src={pizzaLogo} alt='MyPizza'/>
    </div>
)

export default logo;