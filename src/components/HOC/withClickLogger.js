import React from 'react';

const withClickLogger = (WrappedComponent) => {
    return ({ ...props }) => {
        const handleClick = (id) => {
            console.log(`Book with ID: ${id} was clicked!`)
        };
        return <WrappedComponent {...props} onClick={handleClick} />
    };
}

export default withClickLogger;