import React from 'react';
import {Link} from 'react-router-dom';

function NoRouteMatch( props ){
    return(
        <div>
            This page is under construction.
            <p>
                <Link to="/home-page">
                    Go back to home page
                </Link>
            </p>
        </div>
    )
}

export default NoRouteMatch;

// Hooks, Context, Conditional Rendering