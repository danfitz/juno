import React, { Component } from 'react';

class FeaturedPark extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p className="featuredPark">{this.props.name}</p>
                <button onClick={this.props.removePark}>Remove Park</button>
            </div>
        );
    }
}

export default FeaturedPark;