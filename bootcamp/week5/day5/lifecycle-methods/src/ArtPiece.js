import React from "react";

function ArtPiece(props) {
    const { piece } = props;

    return (
        <div>
            <h2>{piece.title}</h2>
            <img src={piece.webImage.url} alt="" />
        </div>
    )
}

export default ArtPiece;