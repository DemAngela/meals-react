import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'container'}>
                <div className={'headerWrapper'}>
                    <Link to={'/'} className={'linkH'}>Home</Link>
                    <Link to={'/search'} className={'linkH'}>Search</Link>
                </div>
            </div>
        </header>
    )
}

export default Header