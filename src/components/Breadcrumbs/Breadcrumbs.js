import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Breadcrumbs(props) {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((u) => u);

    return (
        <div className="container">
            <Link to="/">Home</Link>

            {pathnames.map((value, index) => {
                const isLast = index === pathnames.length -1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                console.log('Where:', to);

                return isLast ? (
                    // <span key={to}> | {value}</span>
                    <span key={to}> | {value}</span>
                ) : (
                    <>
                        <span> | </span>
                        <Link key={to} to={to}>
                            {value}
                        </Link>
                    </>
                );
            })}
        </div>
    );
}

export default Breadcrumbs;