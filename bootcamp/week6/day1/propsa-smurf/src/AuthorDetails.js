import React from 'react';

function AuthorDetails({author: {name, location: {city, province}}}) {

    return (
        <p>
            The author {name} is from {city}, {province}. 
        </p>
    );
};

export default AuthorDetails;