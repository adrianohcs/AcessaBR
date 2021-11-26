import React from 'react';
import './style.css'
import logoAcessaBR from '../../images/logo-acessaBR.svg'
import logoEbac from '../../images/logo-ebac.svg'

const Header = () => {
    return (
        <header className="header__container">
            <div className="header__logo header__logo--state">
                <img src={logoAcessaBR} alt="Logo AcessaBR" />
                <span className="header__city">
                    / Goiânia - GO
                </span>
            </div>
            <div className="header__logo header__logo--ebac">
                <span className="header__span">
                    Apoio:
                </span>
                <img src={logoEbac} alt="Logo EBAC"/>
            </div>

        </header>
    )
}

export default Header;