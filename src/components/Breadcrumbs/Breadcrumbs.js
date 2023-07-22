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

                console.log('Where:', location.pathname);

                return isLast ? (
                    <span key={location.pathname}> | {value}</span>
                ) : (
                    <>
                        <span> | </span>
                        <Link key={location.pathname} to={location.pathname}>
                            {value}
                        </Link>

                    </>
                );
            })}
        </div>
    );
}

export default Breadcrumbs;