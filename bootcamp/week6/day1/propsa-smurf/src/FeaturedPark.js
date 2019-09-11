import React from 'react';

function FeaturedPark(props) {
    return (
        <div>
            <p className="featuredPark">{props.name}</p>
            <button onClick={props.removePark}>Remove Park</button>
        </div>
    );
};

export default FeaturedPark;