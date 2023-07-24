import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Breadcrumbs() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(u => u);

    return (
        <div className="container">
            <Link to="/">Home</Link>

            {pathnames.map((value, index) => {
                const isLast = index === pathnames.length -1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                let breadcrumb = value;

                if(isLast && value.includes("-")) {
                    breadcrumb = value.split("-").slice(1).join(" ");
                }

                return isLast ? (
                                    <span key={to}> | {breadcrumb} </span>
                                ) : (
                                        <>
                                            <span> | </span>
                                            <Link key={to} to={to}>
                                                {breadcrumb}
                                            </Link>
                                        </>
                                    );
            })}
        </div>
    );
}

export default Breadcrumbs;