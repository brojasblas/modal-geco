import React from "react";
import '../styles/Header.scss';

function Header() {

    return (
        <>
            <div className="header-container">
                <div className="header-section">
                    <div className="section-left">
                        <div className="header-info">
                            Numero commessa: 000
                        </div>
                        <div className="header-info">
                            Referente: Nome
                        </div>
                        <div className="header-info">
                            Tipo: A Tempo
                        </div>
                    </div>
                    <div className="section-right">
                        <div className="header-info">
                            Cliente: XXX
                        </div>
                        <div className="header-info">
                            Linea: IT
                        </div>
                        <div className="header-info">
                            PM: XXX
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Header;